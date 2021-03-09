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
    }
}
</script>

<style scoped>

</style>
