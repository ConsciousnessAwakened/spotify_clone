<template>
    <section class="mx-auto">
        <!--
        minimum character count
        Playlist/album name: 25 characters
        Artist name: 18 characters
        Track name: 23 characters
        -->

        <transition-group
            enter-active-class="animate-fade-in"
            leave-active-class="hidden"
            tag="div"
            class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
            <div v-for="(list, key) in lists" :key="list.id" v-if="!isHidden(key)" class="mt-10 scaffoldGray">
                <div v-if="list.type == 'playlist'">
                    <img class="w-full" loading="lazy" :src="list.image"/>
                    <div class="truncate text-sm font-semibold px-1" v-html="list.name"></div>
                    <div class="line-clamp-2 text-xs px-1" v-html="list.description"></div>
                </div>
                <div v-if="list.type == 'album'">
                    <img class="w-full" loading="lazy" :src="list.images[0].url"/>
                    <div class="truncate text-sm font-semibold px-1" v-html="list.name"></div>
                    <div class="line-clamp-2 text-xs px-1" v-html="list.artists.map((artists)=>{return artists.name}).join(', ')"></div>
                </div>
            </div>
        </transition-group>

        <!--<div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
            <div v-for="(list, key) in lists" :key="list.id" :class="{'hidden' : isHidden(key)}">
                <img class="w-full" loading="lazy" :src="list.image"/>
                <div class="truncate text-base font-semibold" v-html="list.name"></div>
                <div class="truncate text-sm" v-html="list.description"></div>
            </div>
        </div>-->
    </section>
</template>

<script>
import FeaturedMixin from "../../../Mixins/Featured/FeaturedMixin";

export default {
    name: "Featured",

    mixins : [
        FeaturedMixin
    ],

    props: {
        lists: {
            type: Array,
            default: () => {return []}
        },
        type: {
            type: Number,
            default: FEATURE_TYPE.PEEK
        }
    },
}
</script>

<style scoped>

</style>
