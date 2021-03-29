<template>
    <app>
        <profile/>
        <section class="mx-auto">
            <!--
            minimum character count
            Playlist/album name: 25 characters
            Artist name: 18 characters
            Track name: 23 characters
            -->

            <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 scaffoldDark">
                <div v-for="playlist in playlists" class="scaffoldLight">
                    <img class="w-full" :src="'images/album_cover_01.jpg'"/>
                    <div v-text="playlist.number"></div>
                    <div class="truncate">Paylist / Album Name Loooooooooooooooooong</div>
                    <div class="truncate">Description Loooooooooooooooooooooooooong</div>
                </div>
            </div>
        </section>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import Profile from "./Profile";

export default {
    name: "Index",

    components: {
        Profile,
        App
    },

    data() {
        return {
            playlists : [
                {number:1},
                {number:2},
                {number:3},
                {number:4},
                {number:5},
                {number:6},
                {number:7},
                {number:8},
                {number:9},
                {number:10},
            ]
        }
    }
}
</script>

<style scoped>

</style>
