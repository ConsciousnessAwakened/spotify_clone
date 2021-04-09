<template>
    <div>
        <div v-if="list.type == 'playlist'">
            <img class="w-full" loading="lazy" :src="list.image"/>
            <div class="truncate text-sm font-semibold px-1" v-html="list.name"></div>
            <div class="line-clamp-2 text-xs px-1" v-html="list.description"></div>
        </div>
        <div v-if="list.type == 'album'">
            <img class="w-full" loading="lazy" :src="list.images[0].url"/>
            <div class="flex px-1 justify-between">
                <div class="truncate text-sm font-semibold" v-html="list.name"></div>
                <div class="text-sm font-medium ml-2" v-html="list.albumType"></div>
            </div>
            <div class="line-clamp-2 text-xs px-1" v-html="list.artists.map((artists)=>{return artists.name}).join(', ')"></div>
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
