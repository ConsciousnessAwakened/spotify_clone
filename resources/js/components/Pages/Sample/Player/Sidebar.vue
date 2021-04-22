<template>
    <div class="bg-black h-screen w-sidebar flex-none hidden sm:hidden md:inline-block">
        <div class="relative">
            <div class="p-6 flex justify-center">
                <img class="h-10" :src="'images/bilberry/icons/bilberry_icon.png'" />
            </div>

            <div class="px-2 text-gray-400">
                <button v-for="sideNavigation in sideNavigations.head.options"
                        class="w-full rounded px-3 py-2 flex items-center justify-start hover:text-white focus:outline-none"
                        :class = "sideNavigation.id === sideNavigations.head.active ? 'text-white bg-gray-500' : ''"
                        @click="toggleActive(sideNavigation.id, sideNavigations.head)">

                    <div v-html="sideNavigation.svg"></div>

                    <span class="ml-2 text-base" v-text="sideNavigation.text"></span>
                </button>
            </div>

            <div class="px-2">
                <div class="px-3 pt-5 pb-2 text-gray-400 text-xs tracking-wider uppercase">
                    playlists
                </div>

                <div class="text-gray-400 mb-3">
                    <button v-for="sideNavigation in sideNavigations.body.options"
                            class="w-full rounded px-3  py-2 flex items-center justify-start hover:text-white focus:outline-none border-0"
                            :class = "sideNavigation.id === sideNavigations.body.active ? 'text-white' : ''"
                            @click="toggleActive(sideNavigation.id, sideNavigations.body)">

                        <div v-html="sideNavigation.svg"></div>

                        <span class="ml-2 text-xs" v-text="sideNavigation.text"></span>
                    </button>
                </div>

                <div class="h-px w-full bg-gradient-to-r from-black via-white to-black"></div>
            </div>
        </div>

        <div class="ml-2 mt-2 absolute" style="top: 290px;" :class="playing.minimized ? 'bottom-InstallApp-playbar' :'bottom-InstallApp-cover-playbar'">
            <div class="overflow-y-auto" style="height: 100%; max-width: 222px; min-height: 100px;">
                <span v-for="album in albums.data" class="block pl-3 text-gray-400 hover:text-white text-sm py-1 cursor-pointer"
                      style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"
                      v-text="album.name">
                </span>
            </div>
        </div>

        <div class="text-gray-400 bg-black absolute w-cover" :class="playing.minimized ? 'bottom-playbar' :'bottom-cover-playbar'">
            <button class="px-3 py-2 w-full flex items-center focus:outline-none hover:text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                <span class="ml-2 font-semibold">Install App</span>
            </button>
        </div>

        <div class="bg-white absolute bottom-playbar w-cover" :class="playing.minimized ? 'hidden' :'block'">
            <div class="relative">
                <svg @click="toggleMinimizePlaying()" class="w-8 absolute right-0 z-10 text-white bg-black rounded-full cursor-pointer p-1 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                <img :src="playing.album.cover">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",

    data() {
        return {
            logo : "images/spotify/spotify-icons-logos/logos/02_CMYK/02_PNG/Spotify_Logo_CMYK_Green.png",
            sideNavigations : {
                head : {
                    active : "home",
                    options : [
                        {
                            id      : "home",
                            text    : "Home",
                            svg     : "<svg class=\"w-6\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z\" /></svg>"
                        },
                        {
                            id      : "search",
                            text    : "Search",
                            svg     : "<svg class=\"w-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" /></svg>"
                        },
                        {
                            id      : "library",
                            text    : "Your Library",
                            svg     : "<svg class=\"w-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z\" /></svg>"
                        }
                    ]
                },
                body : {
                    active : "createPlaylist",
                    options : [
                        {
                            id      : "createPlaylist",
                            text    : "Create Playlist",
                            svg     : "<svg class=\"w-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"></path></svg>"
                        },
                        {
                            id      : "likedSongs",
                            text    : "Liked Songs",
                            svg     : "<svg class=\"w-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"></path></svg>"
                        }
                    ]
                }
            },
            albums : {
                data: [
                    { name : 'Anime' },
                    { name : 'Instrumental' },
                    { name : 'All Time' },
                    { name : 'Timeless Fever' },
                    { name : 'Scene' },
                    { name : 'My Playlist #1' },
                    { name : 'Game' },
                    { name : 'FF' },
                    { name : 'OPM' },
                    { name : 'This is a Loooooooooong Playlist Name' },
                    { name : 'Rock' },
                    { name : 'Remix' },
                    { name : 'Beat' },
                    { name : 'Remix' },
                    { name : 'Remix' },
                    { name : 'Remix' },
                    { name : 'Remix' },
                    { name : 'Remix' },
                    { name : 'Remix' },
                    { name : 'Remix' },
                    { name : 'Remix' },
                ]
            },

            playing : {
                album : {
                    cover : "images/album_cover_05.jpg"
                },
                minimized : false
            }
        }
    },

    mounted() {

    },

    methods : {
        toggleActive(id, section) {

            if(!(section.active === id)){
                section.active = id;
            }

        },

        toggleMinimizePlaying() {
            this.playing.minimized = !this.playing.minimized;
        }
    }
}
</script>

<style scoped>

</style>
