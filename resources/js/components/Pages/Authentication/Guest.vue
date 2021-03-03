<template>
    <app>
        <login />
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Login from "./Login";
import Core from "../../../Mixins/Core";

export default {
    name: "Guest",

    mixins:[
        Core
    ],

    components: {
        Login,
        App
    },

    mounted() {
        console.log("Guest Mounted");

        if(window.location.hash) {
            let that = this;

            let hash = UrlHash.toObject();

            that.confirmApiAuthorization({
                form : hash
            }).then(function (response) {

                that.finishProcessing();
                if (response.data.isSuccessful) {

                    that.$inertia.get('/account');
                }
            }).catch(function (error) {

                setTimeout(()=>{

                    that.finishProcessing();
                    console.log(error.response.data.errors);
                }, 3000);
            });
        }
    }
}
</script>

<style scoped>

</style>
