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

        console.log(that.notification);

        if (!_.isEmpty(Url.hashToObject())) {
            console.log(Url.hashToObject());
        }

        if (!_.isEmpty(Url.paramsToObject())) {
            console.log(Url.paramsToObject());
        }

        // if(window.location.hash && Url.toObject().hasOwnProperty('access_token')) {
        //
        //     that.confirmApiAuthorization({
        //         form : hash
        //     }).then(function (response) {
        //
        //         that.finishProcessing();
        //         if (response.data.isSuccessful) {
        //
        //             that.$inertia.get('/account');
        //         }
        //     }).catch(function (error) {
        //
        //         that.finishProcessing();
        //         console.log(error.response.data.errors);
        //     });
        // }
    }
}
</script>

<style scoped>

</style>
