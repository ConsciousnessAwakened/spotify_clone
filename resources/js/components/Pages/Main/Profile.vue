<template>
    <div class="rounded-b-md rounded-t-lg overflow-hidden border border-gray-200 shadow-lg m-4 p-4 max-w-xs">
        <img src="https://picsum.photos/300/100/" class="w-full rounded-t-lg" />

        <div class="flex justify-center px-16">
            <img :src="profileImage" class="rounded-full w-full border-solid border-white border-2 -mt-12">
        </div>

        <div class="text-center px-3 mt-2">
            <h3 class="text-gray-500 text-sm" v-text="account.country"></h3>
            <p class="text-gray-500 text-lg font-bold" v-text="account.display_name"></p>
        </div>

        <div class="text-center mt-2">
            <h2 v-text="account.followers.total"></h2>
            <span class="text-gray-500 text-sm">Followers</span>
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
            service : that.api['spotify'].account(),
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
