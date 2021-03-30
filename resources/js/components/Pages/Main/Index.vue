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

            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 scaffoldDark">
                <div v-for="(playlist, key) in playlists" :class="{'hidden' : isHidden(key)}" class="scaffoldLight">
                    <img class="w-full" loading="lazy" :src="'images/album_cover_01.jpg'"/>
                    <div v-text="playlist.number"></div>
                    <div v-text="'Key : ' + key"></div>
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
            ],
            windowWidth : window.innerWidth
        }
    },

    mounted() {
        window.addEventListener('resize', this.handleWindowWidth);
    },

    destroyed() {
        window.removeEventListener('resize', this.handleWindowWidth);
    },

    methods : {
        handleWindowWidth() {
            this.windowWidth = window.innerWidth;
        },
        isHidden(key) {
            let hidden = true;

            if (this.windowWidth < SCREEN_WIDTH.SM) {
                hidden = !(key <= 0);
            } else if (this.windowWidth >= SCREEN_WIDTH.SM && this.windowWidth < SCREEN_WIDTH.MD) {
                hidden = !(key <= 1);
            } else if (this.windowWidth >= SCREEN_WIDTH.MD && this.windowWidth < SCREEN_WIDTH.LG) {
                hidden = !(key <= 2);
            } else if (this.windowWidth >= SCREEN_WIDTH.LG && this.windowWidth < SCREEN_WIDTH.XL) {
                hidden = !(key <= 3);
            } else if (this.windowWidth >= SCREEN_WIDTH.XL && this.windowWidth < SCREEN_WIDTH.XXL) {
                hidden = !(key <= 5);
            } else if (this.windowWidth >= SCREEN_WIDTH.XXL) {
                hidden = !(key <= 7);
            }

            return hidden;
        }
    },

    watch : {
        windowWidth : {
            immediate : true,
            handler : (oldWidth, newWidth) => {
                console.log({windowWidth : [oldWidth, newWidth]});
            }
        }
    }
}
</script>

<style scoped>

</style>
