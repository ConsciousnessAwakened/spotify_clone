<template>
    <div class="container">
        <div class="relative">
            <div class="bg-gray-200 w-screen flex">
                <side-bar></side-bar>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Feature from "../../Sample/Feature";

export default {
    name: "Play",

    components: {
        Feature,
        'side-bar' : Sidebar
    },

    mounted() {
        this.startProcessing();
        setTimeout(()=>{
            this.finishProcessing();
        }, 3000);
    }
}
</script>

<style scoped>

</style>
