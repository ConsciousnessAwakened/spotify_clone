<template>
    <div class="rounded-b-md rounded-t-lg overflow-hidden border border-gray-200 shadow-lg m-4 p-2 max-w-xs bg-gradient-to-t from-transparent">
        <img src="https://picsum.photos/300/100/" class="w-full rounded-t-lg" />

        <div class="flex px-4">
            <div class="rounded-full w-2/4 h-auto bg-cover border-solid border-white border-4 -mt-10"
                :style="{ 'background-image': 'url(' + profileImage + ')' }"></div>
            <div class="ml-2 mt-1 w-full">
                <div class="text-gray-500 text-xs" v-text="account.country"></div>
                <div class="text-gray-500 text-base font-semibold" v-text="account.display_name"></div>
                <div class="h-px w-full bg-gradient-to-r from-gray-500 via-gray-400 to-transparent"></div>
                <div>
                    <span class="text-gray-400 text-sm font-bold" v-text="account.followers.total"></span>
                    <span class="text-gray-400 text-sm">Followers</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",

    data() {
        return {
            account : {
                country: "...",
                display_name: "...",
                external_urls: {
                    spotify: ""
                },
                followers: {
                    total: 0
                },
                id: "",
                images: [
                    {
                        url: ""
                    }
                ],
                product: "",
                type: "",
            }
        }
    },

    computed: {
        profileImage() {
            return _.get(this.account.images[0], 'url', 'https://picsum.photos/100/100');
        }
    },

    mounted() {
        let that = this;

        that.request({
            service : that.api[that.app.instance.api].account(),
            delayedResponse : true,
            successCallback : (response) => {
                that.account = response.data
            }
        });
    }
}
</script>

<style scoped>

</style>
