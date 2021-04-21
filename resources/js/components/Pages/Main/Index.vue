<template>
    <app>
        <overlay-sidebar slot="side"/>

        <profile slot="header" />

        <scrollable class="ease-out transition-all duration-300 z-40 scaffoldGray" :class="overlaySideBar ? 'ml-72' : ''" slot="content">
            <div slot="body">
                <shelf class="mb-5 scaffoldGray" :title="'Spotify Featured'" :lists="featured" :type="0" />
                <shelf class="mb-5 scaffoldGray" :title="'Spotify New Releases'" :lists="newRelease" :type="1" />
            </div>
        </scrollable>

        <!--<div class="mt-5 ease-out transition-all duration-300 z-40" :class="overlaySideBar ? 'ml-72' : ''" slot="content">
            <shelf class="mb-5 scaffoldGray" :lists="featured" :type="0" />
            <shelf class="mb-5 scaffoldGray" :lists="newRelease" :type="1" />
        </div>-->
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Profile from "./Profile";
import Shelf from "./Shelf";
import Overlay from "../../Side/Overlay";
import Scrollable from "../../Layouts/Scrollable";

export default {
    name: "Index",

    components: {
        OverlaySidebar : Overlay,
        Shelf,
        Profile,
        Scrollable,
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
