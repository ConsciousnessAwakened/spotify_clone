<template>
    <section class="mx-auto pt-10">
        <transition-group
            enter-active-class="animate-fade-in"
            leave-active-class="hidden"
            tag="div"
            class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
            <div v-for="(list, key) in lists" :key="list.id" v-if="type === 0 ? !isHidden(key) : true" class="scaffoldGray">
                <standard-card :list="list" />
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
import ShelfMixin from "../../../Mixins/Featured/ShelfMixin";
import Standard from "../../Cards/Standard";

export default {
    name: "Shelf",

    components: {
        'StandardCard' : Standard
    },

    mixins : [
        ShelfMixin
    ],

    props: {
        lists: {
            type: Array,
            default: () => {return []}
        },
        type: {
            type: Number,
            default: SHELF_TYPE.PEEK
        }
    },
}
</script>

<style scoped>

</style>
