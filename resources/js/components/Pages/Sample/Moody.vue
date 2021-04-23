<template>

    <app>
        <overlay-sidebar slot="side"/>

        <profile slot="header" />

        <div slot="content">
        </div>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Overlay from "../../Side/Overlay";
import Profile from "../../Profile";

export default {
    name: "Moody",

    components: {
        OverlaySidebar: Overlay,
        App,
        Profile,
    },

    async mounted() {
        await this.getAccount();
    }
}
</script>

<style scoped>

</style>
