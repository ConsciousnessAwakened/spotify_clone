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
import SampleTailwind from "../../Sample/SampleTailwind";

export default {
    name: "Play",

    components: {
        SampleTailwind,
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
