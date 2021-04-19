<template>
    <app>
        <overlay-sidebar slot="side"/>

        <profile slot="header" />

        <scrollable class="scaffoldGray" slot="content">
            <div slot="body">
                <div class="py-12 scaffoldGray">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hello There</h2>
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Another Page
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                <inertia-link class="block" href="/play" preserve-state preserve-scroll>Play</inertia-link>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="py-12 scaffoldGray">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hello There</h2>
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Another Page1
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                <inertia-link class="block" href="/play" preserve-state preserve-scroll>Play</inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="py-12 scaffoldGray">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hello There</h2>
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Another Page2
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                <inertia-link class="block" href="/play" preserve-state preserve-scroll>Play</inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="py-12 scaffoldGray">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hello There</h2>
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Another Page3
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                <inertia-link class="block" href="/play" preserve-state preserve-scroll>Play</inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="py-12 scaffoldGray">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hello There</h2>
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Another Page4
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                <inertia-link class="block" href="/play" preserve-state preserve-scroll>Play</inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="py-12 scaffoldGray">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Hello There</h2>
                            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Another Page5
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                <inertia-link class="block" href="/play" preserve-state preserve-scroll>Play</inertia-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </scrollable>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Overlay from "../../Side/Overlay";
import Profile from "../Main/Profile";
import Scrollable from "../../Layouts/Scrollable";

export default {
    name: "AnotherPage",

    components: {
        OverlaySidebar: Overlay,
        App,
        Scrollable,
        Profile,
    },

    async mounted() {
        await this.getAccount();
    }
}
</script>

<style scoped>

</style>
