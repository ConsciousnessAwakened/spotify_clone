<template>
    <div>
        <div class="space-y-2 pb-2" v-if="list.type == 'playlist'">
            <div class="w-full">
                <inertia-link href="/another" preserve-state preserve-scroll>
                    <img class="w-full cursor-pointer" loading="lazy" :src="list.image"/>
                </inertia-link>

                <div class="truncate text-sm font-semibold px-1" v-html="list.name"></div>
                <div class="line-clamp-2 text-xs px-1" v-html="list.description" style="height: 30px;"></div>
            </div>

            <div class="w-full px-2 space-y-1">
                <moody-button
                    @click.native=""
                    :theme="{border: 'scaffoldGray'}"
                    :size="'sm'"
                    :logo="'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png'"
                    :label="{value : 'PLAY ON SPOTIFY', class : 'tracking-tighter uppercase hover:underline'}"></moody-button>

                <moody-button
                    @click.native=""
                    :theme="{border: 'scaffoldGray'}"
                    :size="'sm'"
                    :logo="'images/play.png'"
                    :label="{value : 'PLAY PREVIEW', class : 'tracking-tighter uppercase hover:underline'}"></moody-button>
            </div>
        </div>
        <div class="space-y-2 pb-2" v-if="list.type == 'album'">
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
                <moody-button
                    @click.native=""
                    :theme="{border: 'scaffoldGray'}"
                    :size="'sm'"
                    :logo="'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png'"
                    :label="{value : 'PLAY ON SPOTIFY', class : 'tracking-tighter uppercase hover:underline'}"></moody-button>

                <moody-button
                    @click.native=""
                    :theme="{border: 'scaffoldGray'}"
                    :size="'sm'"
                    :logo="'images/play.png'"
                    :label="{value : 'PLAY PREVIEW', class : 'tracking-tighter uppercase hover:underline'}"></moody-button>
            </div>
        </div>
    </div>
</template>

<script>
import MoodyButton from "../MoodyButton";

export default {
    name: "Standard",

    components : {
        MoodyButton
    },

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
