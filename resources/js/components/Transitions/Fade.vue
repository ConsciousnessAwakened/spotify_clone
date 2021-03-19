<template>
    <transition
        :appear="initial"
        enter-active-class="animate-fade-in"
        leave-active-class="animate-fade-out">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: "Fade",

    props: {
        initial: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
