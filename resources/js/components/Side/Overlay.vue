<template>
    <div>
        <div v-if="overlaySideBar" @click="toggleOverlaySidebar" class="absolute w-full h-full z-40" style="background-color: rgba(64,64,64,0.5)"></div>
        <aside
            class="transform top-0 left-0 w-52 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-40 scaffoldDark"
            :class="overlaySideBar ? 'translate-x-0' : '-translate-x-full'">
            <h1>Sidebar</h1>

            <inertia-link class="block" href="/browse" preserve-state preserve-scroll>Browse</inertia-link>
            <inertia-link class="block" href="/another" preserve-state preserve-scroll>Another Page</inertia-link>
        </aside>
    </div>
</template>

<script>
export default {
    name: "Overlay"
}
</script>

<style scoped>

</style>
