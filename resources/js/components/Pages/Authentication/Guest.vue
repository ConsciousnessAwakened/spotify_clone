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

    mounted() {
        let that = this

        if(Uri.hasValueAndProperty('hash', 'access_token')) {
            that.authorized({data : Uri.toObject('hash')});

        } else if (!_.isEmpty(that.$page.props.access_token) && !_.isEmpty(that.$page.props.state)) {
            that.authorized({
                data : {
                    access_token : that.$page.props.access_token,
                    state : that.$page.props.state
                }
            });
        }
    },

    methods: {
        authorized(args) {
            let that = this;

            that.request({
                service : that.service.confirmApiAuthorization,
                args : args,
                successCallback : (response) => {
                    if (response.data['isSuccessful']) that.$inertia.get('/welcome');
                }
            });

        }
    }
}
</script>

<style scoped>

</style>
