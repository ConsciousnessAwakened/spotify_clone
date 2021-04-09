<template>
    <app>
        <overlay-sidebar slot="side"/>

        <profile slot="header" />

        <div class="mt-5" slot="content">
            <div class="py-12 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hello There</h2>
                        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Another Page
                        </p>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Another Page
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Overlay from "../../Side/Overlay";
import Profile from "../Main/Profile";

export default {
    name: "AnotherPage",

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
