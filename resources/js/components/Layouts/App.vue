<template>
    <div>
        <warping-cube :processing="page.state.processing"/>
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
            page : this.page
        }
    },

    data() {
        return {
            page : {
                state : {
                    processing : true
                }
            }
        }
    },

    mounted() {

        let that = this;

        document.onreadystatechange = () => {

            if (DOCUMENT.READY_STATE.COMPLETE === document.readyState) {
                setTimeout(() => {
                    that.page.state.processing = false;
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
