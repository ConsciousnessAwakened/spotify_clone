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

        console.log("App Before Create");

        if (!_.isEmpty(that.$page.props.access_token)) {
            window.crossDomain.defaults.headers.common['Authorization'] = `Bearer ${that.$page.props.access_token}`;
        }
    },

    created() {
        let that = this;

        console.log("App Created");

        that.stateAppAuthorization({
            api : _.get(that.$page.props, 'api', null),
            state : _.get(that.$page.props, 'state', null)
        });
    },

    mounted() {
        console.log("App Mounted");
    },

    methods: {

    }
}
</script>

<style scoped>

</style>
