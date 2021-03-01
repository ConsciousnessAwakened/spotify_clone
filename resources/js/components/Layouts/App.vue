<template>
    <div>
        <warping-cube :processing="page.processing"/>
        <login />
    </div>
</template>

<script>
import WarpingCube from "../Loaders/WarpingCube";
import Login from "../Pages/Authentication/Login";

export default {
    name: "App",

    components: {
        Login,
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
                setTimeout(()=>{that.page.processing = false;}, 750)
            }
        }
    },

    methods: {
    }
}
</script>

<style scoped>

</style>
