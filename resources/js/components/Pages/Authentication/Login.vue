<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-2">
            <div class="flex justify-center">

                <img class="w-full" :src="'images/app/logos/logo.png'" />

            </div>
            <div class="w-full bg-gradient-to-r from-transparent via-white from-transparent" style="height: 2px;"></div>
            <div class="space-y-2">
                <moody-button
                    @click.native="continueWith('spotify')"
                    :theme="{text : 'light', background : 'bg-spotify-darkGreen hover:bg-spotify-green'}"
                    :size="'lg'"
                    :logo="'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png'"
                    :label="{value : 'Continue with Spotify'}"></moody-button>

                <moody-button
                    @click.native="continueWith('')"
                    :theme="{border : 'border border-gray-300'}"
                    :size="'lg'"
                    :logo="'images/google/icons/google-logo-9808.png'"
                    :label="{value : 'Continue with Youtube Music'}"></moody-button>
            </div>
        </div>
    </div>
</template>

<script>
import MoodyButton from "../../MoodyButton";

export default {
    name: "Login",

    components : {
        MoodyButton
    },

    methods: {
        continueWith(app) {

            if(_.isEmpty(app)) return false;

            this.askAuthorization({
                api : app,
                state : Text.random(10)
            });
        }
    }
}
</script>

<style scoped>

</style>
