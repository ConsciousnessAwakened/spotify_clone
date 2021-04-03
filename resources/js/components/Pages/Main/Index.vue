<template>
    <app>
        <profile class="mb-5" />
        <featured :lists="featuredLists" />
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Profile from "./Profile";
import Featured from "./Featured";

export default {
    name: "Index",

    components: {
        Featured,
        Profile,
        App
    },

    async mounted() {
        await this.getAccount();
        await this.getFeatured();
        //await this.getNewReleases();
    }
}
</script>

<style scoped>

</style>
