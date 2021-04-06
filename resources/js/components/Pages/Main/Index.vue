<template>
    <app>
        <profile/>
        <featured class="mb-5" :lists="featured" />
        <featured class="mb-5" :lists="newRelease" />
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Profile from "./Profile";
import Featured from "./Featured";
import Sidebar from "./Player/Sidebar";

export default {
    name: "Index",

    components: {
        Sidebar,
        Featured,
        Profile,
        App
    },

    async mounted() {
        await this.getAccount();
        await this.getFeatured();
        await this.getNewReleases();
    },
}
</script>

<style scoped>

</style>
