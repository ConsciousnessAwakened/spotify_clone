<template>
    <app>
        <profile slot="header" />
        <div class="mt-5" slot="content">
            <shelf class="mb-5 scaffoldGray" :lists="featured" :type="0" />
            <shelf class="mb-5 scaffoldGray" :lists="newRelease" :type="1" />
        </div>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Profile from "./Profile";
import Shelf from "./Shelf";

export default {
    name: "Index",

    components: {
        Shelf,
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
