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

        console.log(that.$store.state.app.notification);

        that.app.notification.error.set(['Error', 'Error 02']);
        that.app.notification.info.set({payload : ['Info', 'Info 02']});
        that.app.notification.warning.set({payload : ['Warning', 'Warning 02']});

        console.log(that.app.notification.error.get());
        console.log(that.app.notification.info.get('payload'));
        console.log(that.app.notification.warning.get());

        that.app.notification.error.clear();
        that.app.notification.info.clear();
        that.app.notification.warning.clear();

        console.log(that.app.notification.error.get());
        console.log(that.app.notification.info.get('payload'));
        console.log(that.app.notification.warning.get());

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
