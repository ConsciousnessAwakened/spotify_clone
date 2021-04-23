<template>
    <nav class="flex items-center mx-auto px-4 scaffoldGray">
        <div>
            <svg class="w-6 h-6 cursor-pointer" @click="toggleOverlaySidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </div>
        <div class="relative py-2 ml-auto flex items-center space-x-3">
            <!--<div class="relative">
                <div class="flex px-2 items-center rounded cursor-pointer text-gray-700 hover:text-bilberry-primary">
                    <a class="text-base font-semibold">{{ followers }} Followers</a>
                </div>
            </div>-->
            <div class="h-12 bg-gradient-to-t from-transparent via-gray-500 from-transparent" style="width: 2px;">&nbsp;</div>
            <div class="bg-cover bg-transparent rounded-md w-12 h-12 cursor-pointer" :style="{'background-image': 'url(' + profileImage + ')'}" @click="profileDropDown = !profileDropDown">&nbsp;</div>
            <div class="relative">
                <div class="flex pr-2 items-center rounded cursor-pointer text-gray-700 hover:text-bilberry-primary" @click="profileDropDown = !profileDropDown">
                    <a class="text-base font-semibold">{{ displayName }}</a>

                    <svg class="w-5 h-5 ml-2 transform transition-transform duration-200" :class="{'rotate-180': profileDropDown, 'rotate-0' : !profileDropDown}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>

                <div v-if="profileDropDown" class="origin-top-right border-gray-400 border absolute right-0 mt-1 w-36 bg-white focus:outline-none rounded-lg">
                    <a :href="accountUrl" target="_blank" class="px-2 py-1 block text-sm font-semibold text-gray-700 hover:bg-bilberry-dark hover:text-gray-100 rounded-lg">View Profile</a>
                    <inertia-link replace :href="$route('logout')" class="px-2 py-1 block text-sm font-semibold text-gray-700 hover:bg-bilberry-dark hover:text-gray-100 rounded-lg">Sign out</inertia-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Profile",

    data() {
        return {
            profileDropDown : false
        }
    }
}
</script>

<style scoped>

</style>
