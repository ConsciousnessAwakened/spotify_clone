<template>
    <app>
        <overlay-sidebar slot="side"/>

        <profile slot="header" />

        <scrollable class="ease-out transition-all duration-300 z-40 scaffoldGray" :class="overlaySideBar ? 'ml-72' : ''" slot="content">
            <div slot="body">
                <moody-shelf
                    class="mb-5"
                    :title="'featured'"
                    :lists="featured"
                    :origin="{value : 'external', app : 'spotify', icon : api['spotify'].images.icon.black}"
                    :type="0" />

                <moody-shelf
                    class="mb-5"
                    :title="'new releases'"
                    :lists="newRelease"
                    :origin="{value : 'external', app : 'spotify', icon : api['spotify'].images.icon.black}"
                    :type="0" />
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
import Profile from "../../Profile";
import MoodyShelf from "../../MoodyShelf";
import Overlay from "../../Side/Overlay";
import Scrollable from "../../Layouts/Scrollable";

export default {
    name: "Index",

    components: {
        OverlaySidebar : Overlay,
        MoodyShelf,
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
