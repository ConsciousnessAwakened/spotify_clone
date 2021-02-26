<template>
    <div>
        <cube :processing="page.processing"/>
        <feature/>
    </div>
</template>

<script>
import Feature from "../Pages/Sample/Feature";
import Cube from "../Loaders/Cube";

export default {
    name: "App",

    components: {
        Cube,
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
