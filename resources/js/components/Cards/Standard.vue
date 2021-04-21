<template>
    <div>
        <div class="space-y-2" v-if="list.type == 'playlist'">
            <img class="ml-1 mt-1 h-8 hidden" :src="'images/spotify/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png'" />

            <div class="w-full">
                <inertia-link href="/another" preserve-state preserve-scroll>
                    <img class="w-full cursor-pointer" loading="lazy" :src="list.image"/>
                </inertia-link>

                <div class="truncate text-sm font-semibold px-1" v-html="list.name"></div>
                <div class="line-clamp-2 text-xs px-1" v-html="list.description" style="height: 30px;"></div>
            </div>

            <div class="w-full px-2 space-y-1">
                <div @click="" class="w-full flex justify-center text-sm font-medium rounded-full text-gray-600 scaffoldGray">
                    <div class="relative px-2 py-1">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-2">
                        <img class="h-6 w-6" :src="'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png'" />
                    </span>

                        <span class="ml-8 text-xs tracking-tight cursor-pointer hover:underline uppercase">PLAY ON SPOTIFY</span>
                    </div>
                </div>

                <div @click="" class="w-full flex justify-center text-sm font-medium rounded-full text-gray-600 scaffoldGray">
                    <div class="relative px-2 py-1">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-2">
                            <img class="h-6 w-6" :src="'images/play.png'" />
                        </span>

                        <span class="ml-8 text-xs tracking-widest cursor-pointer hover:underline uppercase">PLAY PREVIEW</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="space-y-2" v-if="list.type == 'album'">
            <img class="ml-1 mt-1 h-8 hidden" :src="'images/spotify/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png'" />

            <div class="w-full">
                <inertia-link href="/another" preserve-state preserve-scroll>
                    <img class="w-full cursor-pointer" loading="lazy" :src="list.images[0].url"/>
                </inertia-link>
                <div class="flex px-1 justify-between">
                    <div class="truncate text-sm font-semibold" v-html="list.name"></div>
                    <div class="text-sm font-medium ml-2" v-html="list.albumType"></div>
                </div>
                <div class="line-clamp-2 text-xs px-1" v-html="list.artists.map((artists)=>{return artists.name}).join(', ')" style="height: 30px;"></div>
            </div>

            <div class="w-full px-2 space-y-2">
                <div @click="" class="w-full flex justify-center text-sm font-medium rounded-full text-gray-600 scaffoldGray">
                    <div class="relative px-2 py-1">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-2">
                        <img class="h-6 w-6" :src="'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png'" />
                    </span>

                        <span class="ml-8 text-xs tracking-tight cursor-pointer hover:underline uppercase">PLAY ON SPOTIFY</span>
                    </div>
                </div>

                <div @click="" class="w-full flex justify-center text-sm font-medium rounded-full text-gray-600 scaffoldGray">
                    <div class="relative px-2 py-1">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-2">
                            <img class="h-6 w-6" :src="'images/play.png'" />
                        </span>

                        <span class="ml-8 text-xs tracking-widest cursor-pointer hover:underline uppercase">PLAY PREVIEW</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Standard",

    props: {
        list: {
            type: Object,
            default: () => {return {}}
        },
    },
}
</script>

<style scoped>

</style>
