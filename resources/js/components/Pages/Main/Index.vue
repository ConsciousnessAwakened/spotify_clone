<template>
    <app>
        <section>
            <div class="container px-4 mx-auto">
                <nav class="flex items-center">

                    <div class="relative py-4 ml-auto flex items-center space-x-3">
                        <div class="relative">
                            <div class="flex px-2 items-center rounded cursor-pointer text-gray-700 hover:text-bilberry-primary">
                                <a class="text-base font-semibold">{{ followers }} Followers</a>
                            </div>
                        </div>
                        <div class="h-12 bg-gradient-to-t from-transparent via-gray-500 from-transparent" style="width: 2px;">&nbsp;</div>
                        <div class="bg-cover w-12 h-12 rounded-full cursor-pointer" :style="{'background-image': 'url(' + profile + ')'}" @click="toggleheaderDropDown">&nbsp;</div>
                        <div class="relative">
                            <div class="flex pr-2 items-center rounded cursor-pointer text-gray-700 hover:text-bilberry-primary" @click="toggleheaderDropDown">
                                <a class="text-base font-semibold">{{ displayName }}</a>

                                <svg class="w-5 h-5 ml-2 transform transition-transform duration-200" :class="{'rotate-180': headerDropDown, 'rotate-0' : !headerDropDown}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>

                            <div v-if="headerDropDown" class="origin-top-right border-gray-400 border absolute right-0 mt-1 w-36 bg-white focus:outline-none rounded-lg">
                                <a :href="account_url" target="_blank" class="px-2 py-1 block text-sm font-semibold text-gray-700 hover:bg-bilberry-dark hover:text-gray-100 rounded-lg">View Profile</a>
                                <inertia-link href="/logout" class="px-2 py-1 block text-sm font-semibold text-gray-700 hover:bg-bilberry-dark hover:text-gray-100 rounded-lg">Sign out</inertia-link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    </app>
</template>

<script>
import App from "../../Layouts/App";
import {mapGetters} from "vuex";

export default {
    name: "Index",

    components: {
        App
    },

    data() {
        return {
            headerDropDown : false
        }
    },

    computed : {
        ...mapGetters('account',{
            displayName : 'name',
            followers : 'followers',
            account_url : 'accountUrl',
            profile : 'image'
        })
    },

    mounted() {
        this.$store.dispatch('account/getData');
    },

    methods : {
        toggleheaderDropDown() {
            this.headerDropDown = !this.headerDropDown;
        }
    }
}
</script>

<style scoped>

</style>
