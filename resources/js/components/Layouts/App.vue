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

    mounted() {

    },

    methods: {

    }
}
</script>

<style scoped>

</style>
