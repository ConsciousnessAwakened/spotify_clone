<template>
    <section class="mx-auto pt-10">
        <transition-group
            tag="div"
            name="item-from-right"
            class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8"
            :style="{ '--total': lists.length }">
            <div v-for="(list, key) in lists" :key="list.id" v-if="type === 0 ? !isHidden(key) : true" class="scaffoldGray" :style="{'--key': key}">
                <standard-card :list="list" />
            </div>
        </transition-group>

        <!--<transition-group
            enter-active-class="animate-fade-in"
            leave-active-class="hidden"
            tag="div"
            class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
            <div v-for="(list, key) in lists" :key="list.id" v-if="type === 0 ? !isHidden(key) : true" class="scaffoldGray">
                <standard-card :list="list" />
            </div>
        </transition-group>

        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
            <div v-for="(list, key) in lists" :key="list.id" v-if="type === 0 ? !isHidden(key) : true" class="scaffoldGray">
                <standard-card :list="list" />
            </div>
        </div>

        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
            <sequential-entrance tag="div" fromTop class="scaffoldRed">
                <div v-for="(list, key) in lists" :key="list.id" v-if="type === 0 ? !isHidden(key) : true" class="">
                    <standard-card :list="list" />
                </div>
            </sequential-entrance>
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

<style scoped lang="scss">
@keyframes from-right-to-original {
    0% { transform: translateX(50px)}
    100% { transform: translateX(0) }
}

.item-from-right {
    &-enter{
        opacity: 0;
        transform: translateX(50px);
    }

    &-enter-active {
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        transition-delay: calc( 60ms * var(--key) );
        //animation: from-right-to-original 1s ease-in-out;
        //animation-delay: calc( 60ms * var(--key) );
    }

    &-enter-to{
        opacity: 1;
        transform: translateX(0);
    }

    &-leave{
        opacity: 0;
        transform: translateX(0);
    }

    &-leave-active {

    }

    &-leave-to {
        opacity: 0;
        transform: translateX(50px);
    }
}
</style>
