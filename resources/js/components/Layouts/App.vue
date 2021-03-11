<template>
    <div>
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

    },

    methods: {

    }
}
</script>

<style scoped>

</style>
