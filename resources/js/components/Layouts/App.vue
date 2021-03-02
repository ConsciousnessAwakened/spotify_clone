<template>
    <div>
        <warping-cube :processing="app.status.processing"/>
        <slot></slot>
    </div>
</template>

<script>
import Core from "../../Mixins/Core";
import WarpingCube from "../Loaders/WarpingCube";

export default {
    name: "App",

    components: {
        WarpingCube
    },

    mixins:[
        Core
    ],

    provide() {
        return {

        }
    },

    computed : {

    },

    mounted() {

        document.onreadystatechange = () => {

            if (DOCUMENT.READY_STATE.COMPLETE === document.readyState) {
                setTimeout(() => {
                    this.finishProcessing();
                }, 720)
            }
        }
    },

    methods: {

    }
}
</script>

<style scoped>

</style>
