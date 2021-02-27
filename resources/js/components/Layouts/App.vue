<template>
    <div>
        <warping-cube :processing="page.processing"/>
        <feature />
    </div>
</template>

<script>
import Feature from "../Pages/Sample/Feature";
import WarpingCube from "../Loaders/WarpingCube";

export default {
    name: "App",

    components: {
        WarpingCube,
        Feature
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
                that.page.processing = false;
            }
        }
    }
}
</script>

<style scoped>

</style>
