<template>
    <app>
        <login />
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Login from "./Login";

export default {
    name: "Guest",

    components: {
        Login,
        App
    },

    beforeMount() {
        let that = this;

        if(Uri.hasValueAndProperty('hash', 'access_token')) {

            that.confirmApiAuthorization({
                form : Uri.toObject('hash')
            }).then(function (response) {

                that.finishProcessing();
                if (response.data['isSuccessful']) that.$inertia.get('/account');
            }).catch(function (error) {

                that.finishProcessing();
                console.log(error.response.data.errors);
            });
        }
    }
}
</script>

<style scoped>

</style>
