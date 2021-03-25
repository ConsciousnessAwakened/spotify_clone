<template>
    <app>
        <section>
            <div class="container px-4 mx-auto">
                <nav class="flex items-center">

                    <div class="py-4 relative ml-auto flex items-center space-x-1">
                        <div>
                            <div class="flex px-2 items-center rounded cursor-pointer text-gray-700 hover:text-bilberry-primary">
                                <a class="text-lg font-semibold">Toggle Something</a>
                            </div>
                        </div>
                        <div class="h-full bg-gradient-to-t from-transparent via-black from-transparent" style="width: 2px;">&nbsp;</div>
                        <div>
                            <div class="flex px-2 items-center rounded cursor-pointer text-gray-700 hover:text-bilberry-primary" @click="toggleheaderDropDown">
                                <a class="text-lg font-semibold">Display Name</a>

                                <svg class="w-5 h-5 ml-2 transform transition-transform duration-200" :class="{'rotate-180': headerDropDown, 'rotate-0' : !headerDropDown}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>

                            <div v-if="headerDropDown" class="origin-top-right border-gray-400 border absolute right-0 mt-1 w-36 bg-white focus:outline-none rounded-lg">
                                <a href="#" class="px-2 py-1 block text-sm font-semibold text-gray-700 hover:bg-bilberry-dark hover:text-gray-100 rounded-lg">View Profile</a>
                                <a href="#" class="px-2 py-1 block text-sm font-semibold text-gray-700 hover:bg-bilberry-dark hover:text-gray-100 rounded-lg">End Session</a>
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

    methods : {
        toggleheaderDropDown() {
            this.headerDropDown = !this.headerDropDown;
        }
    }
}
</script>

<style scoped>

</style>
