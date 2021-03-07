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
        let that = this

        if(Uri.hasValueAndProperty('hash', 'access_token')) {
            that.request({
                service : that.service.confirmApiAuthorization,
                delayed : false,
                args : { data : Uri.toObject('hash') },
                successCallback : (response) => {
                    if (response.data['isSuccessful']) that.$inertia.get('/account');
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
