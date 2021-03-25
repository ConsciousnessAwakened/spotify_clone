<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-2">
            <div class="flex justify-center">

                <img class="w-3/4" :src="'images/bilberry/logos/bilberry_logo.png'" />

            </div>
            <div class="w-full bg-gradient-to-r from-transparent via-white from-transparent" style="height: 2px;"></div>
            <div class="space-y-2">
                <button @click="continueWith('spotify')" type="submit" class="w-full flex justify-center shadow-lg border border-transparent text-sm font-medium rounded-full text-white bg-spotify-darkGreen hover:bg-spotify-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spotify-darkGreen">
                    <div class="relative py-3 px-4">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-2">
                            <img class="h-10 w-10" :src="'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png'" />
                        </span>

                        <span class="ml-10 text-xl">Continue with Spotify</span>
                    </div>
                </button>

                <button @click="continueWith('')" type="submit" class="w-full flex justify-center shadow-lg border border-gray-300 text-sm font-medium rounded-full text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                    <div class="relative py-3 px-4">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-2">
                            <img class="h-10 w-10" :src="'images/google/icons/google-logo-9808.png'" />
                        </span>

                        <span class="ml-10 text-xl">Continue with Youtube Music</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

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
