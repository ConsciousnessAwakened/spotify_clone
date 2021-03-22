<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-2">
            <div class="flex justify-center">

                <img class="w-full" :src="'images/bilberry/logos/bilberry_logo.png'" />

                <!--<p class="mt-2 text-center text-sm text-gray-600">
                    become a patron
                    <a href="#" class="font-bold text-lg text-codeBlue-primary hover:text-indigo-500">
                        here
                    </a>
                </p>-->
            </div>
            <div class="flex justify-center">
                <button @click="continueWith('spotify')" type="submit" class="relative flex shadow-lg items-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-spotify-darkGreen hover:bg-spotify-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spotify-darkGreen">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-2">
                        <!--<svg class="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                        </svg>-->
                        <img class="h-10 w-10" :src="'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png'" />

                    </span>
                    <span class="ml-10 text-2xl">Continue with Spotify</span>
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
