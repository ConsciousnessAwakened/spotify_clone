<template>
    <div class="overflow-hidden">
        <warping-cube :processing="app.status.processing"/>
        <slot></slot>
    </div>
</template>

<script>
import WarpingCube from "../Loaders/WarpingCube";

export default {
    name: "App",

    components: {
        WarpingCube
    },

    provide() {
        return {

        }
    },

    computed : {

    },

    beforeCreate() {
        let that = this;

        if (!_.isEmpty(that.$page.props.access_token)) {
            window.crossDomain.defaults.headers.common['Authorization'] = `Bearer ${that.$page.props.access_token}`;
        }
    },

    mounted() {
        let that = this;

        console.log("App Mounted");

        if (!_.isEmpty(that.$page.props.state)) {
            that.appState({state : that.$page.props.state});
        }
    },

    methods: {

    }
}
</script>

<style scoped>

</style>
