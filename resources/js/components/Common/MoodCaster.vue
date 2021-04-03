<template>
    <div>
        <div v-if="type === 'video'">
            <fade :initial=true :enter-class="'animate-caster-fade-in'" :leave-class="'animate-caster-fade-out'">
                <video v-if="stack.visible" autoplay muted class="absolute z-30 object-cover w-full h-full">
                    <source :src="stack.src">Your browser does not support the video tag.
                </video>
            </fade>
            <fade :enter-class="'animate-caster-fade-in'" :leave-class="'animate-caster-fade-out'">
                <video v-if="anotherStack.visible" autoplay muted class="absolute z-30 object-cover w-full h-full">
                    <source :src="anotherStack.src">Your browser does not support the video tag.
                </video>
            </fade>
        </div>

        <div v-if="type === 'image'">
            <fade :initial=true :enter-class="'animate-caster-fade-in'" :leave-class="'animate-caster-fade-out'">
                <img v-if="stack.visible" :src="stack.src" class="absolute z-30 object-cover w-full h-full">
            </fade>
            <fade :enter-class="'animate-caster-fade-in'" :leave-class="'animate-caster-fade-out'">
                <img v-if="anotherStack.visible" :src="anotherStack.src" class="absolute z-30 object-cover w-full h-full">
            </fade>
        </div>
    </div>
</template>

<script>
import Fade from "../Transitions/Fade";
import {mapGetters} from "vuex";

export default {
    name: "MoodCaster",

    components: {
        Fade
    },

    computed : {
        ...mapGetters('moodCaster',[
            'type',
            'stack',
            'anotherStack',
            'iteration'
        ])
    }
}
</script>

<style scoped>

</style>
