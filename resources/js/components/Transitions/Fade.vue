<template>
    <transition
        :appear="initial"
        :enter-active-class="enterClass"
        :leave-active-class="leaveClass">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: "Fade",

    props: {
        enterClass: {
            type: String,
            default: 'animate-fade-in'
        },
        leaveClass: {
            type: String,
            default: 'animate-fade-out'
        },
        initial: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
