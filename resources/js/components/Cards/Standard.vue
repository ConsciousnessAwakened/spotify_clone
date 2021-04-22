<template>
    <div class="scaffoldGray space-y-2 pb-2">
        <div class="w-full" v-if="list.type == 'playlist'">
            <inertia-link href="/another" preserve-state preserve-scroll>
                <img class="w-full cursor-pointer" loading="lazy" :src="list.image"/>
            </inertia-link>

            <div class="truncate text-sm font-semibold px-1" v-html="list.name"></div>
            <div class="line-clamp-2 text-xs px-1" v-html="list.description" style="height: 30px;"></div>
        </div>
        <div class="w-full" v-if="list.type == 'album'">
            <inertia-link href="/another" preserve-state preserve-scroll>
                <img class="w-full cursor-pointer" loading="lazy" :src="list.images[0].url"/>
            </inertia-link>
            <div class="flex px-1 justify-between">
                <div class="truncate text-sm font-semibold" v-html="list.name"></div>
                <div class="text-sm font-medium ml-2" v-html="list.albumType"></div>
            </div>
            <div class="line-clamp-2 text-xs px-1" v-html="list.artists.map((artists)=>{return artists.name}).join(', ')" style="height: 30px;"></div>
        </div>

        <div class="w-full px-2 space-y-1" v-if="origin.value == 'external'">
            <a
                :href="list.link"
                target="_blank">
                <moody-button
                    :theme="{border: 'scaffoldGray'}"
                    :size="'sm'"
                    :logo="origin.icon"
                    :label="{value : 'OPEN ON ' + origin.app, class : 'tracking-tighter uppercase hover:underline'}"></moody-button>
            </a>

            <moody-button
                @click.native=""
                :theme="{border: 'scaffoldGray'}"
                :size="'sm'"
                :logo="'images/play.png'"
                :label="{value : 'PLAY PREVIEW', class : 'tracking-tighter uppercase hover:underline'}"></moody-button>
        </div>
        <div class="w-full px-2 space-y-1" v-else-if="origin.value == 'internal'">
            <moody-button
                @click.native=""
                :theme="{border: 'scaffoldGray'}"
                :size="'sm'"
                :logo="'images/play.png'"
                :label="{value : 'PLAY', class : 'tracking-tighter uppercase hover:underline'}"></moody-button>
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
        origin: {
            type: Object,
            default: () => {return{
                value : 'internal',
            }}
        },
    },
}
</script>

<style scoped>

</style>
