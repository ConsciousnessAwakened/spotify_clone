<template>
    <app>
        <overlay-sidebar slot="side"/>

        <profile slot="header" />

        <!--<scrollable class="ease-out transition-all duration-300 z-40 scaffoldGray" :class="overlaySideBar ? 'ml-52' : ''" slot="content">-->
        <scrollable class="z-40 scaffoldGray" slot="content">
            <div slot="body">
                <moody-shelf
                    class="mb-5 scaffoldGray"
                    :title="'featured'"
                    :lists="spotifyFeatured"
                    :origin="{value : 'external', app : 'spotify', icon : api['spotify'].images.icon.black}"
                    :type="0" />
                <moody-shelf
                    class="mb-5 scaffoldGray"
                    :title="'new releases'"
                    :lists="spotifyNewRelease"
                    :origin="{value : 'external', app : 'spotify', icon : api['spotify'].images.icon.black}"
                    :type="1" />
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
        await this.getFeatured({source : 'spotify'});
        await this.getNewReleases({source : 'spotify'});
    },
}
</script>

<style scoped>

</style>
