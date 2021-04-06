<template>
    <app>
        <profile slot="header" />

        <div class="mt-5" slot="content">
            <featured class="mb-5 scaffoldGray" :lists="featured" />
            <featured class="mb-5 scaffoldGray" :lists="newRelease" />
        </div>
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
        await this.getNewReleases();
    }
}
</script>

<style scoped>

</style>
