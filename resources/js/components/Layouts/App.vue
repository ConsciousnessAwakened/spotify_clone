<template>
    <div>
        <warping-cube :processing="page.processing"/>
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
                processing : true
            }
        }
    },

    mounted() {
        let that = this;

        document.onreadystatechange = () => {

            if (DOCUMENT.READY_STATE.COMPLETE === document.readyState) {
                that.page.processing = true;
            }
        }
    }
}
</script>

<style scoped>

</style>
