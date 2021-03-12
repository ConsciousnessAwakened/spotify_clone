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
            that.authorized(Uri.toObject('hash'));

        } else if (!_.isEmpty(that.$page.props.access_token) && !_.isEmpty(that.$page.props.state)) {
            that.authorized({
                access_token : that.$page.props.access_token,
                state : that.$page.props.state
            });
        }
    }
}
</script>

<style scoped>

</style>
