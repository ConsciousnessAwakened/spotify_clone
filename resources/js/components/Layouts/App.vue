<template>
    <div class="overflow-hidden bg-black">
        <warping-cube :processing="app.status.processing"/>
        <media-overlay/>

        <div class="absolute z-40 w-full h-full">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import WarpingCube from "../Loaders/WarpingCube";
import MediaOverlay from "../Overlays/MediaOverlay";

export default {
    name: "App",

    components: {
        MediaOverlay,
        WarpingCube
    },

    data() {
        return {
        }
    },

    provide() {
        return {

        }
    },

    computed : {

    },

    beforeCreate() {
        let that = this;

        console.log("App Before Create");

        if (!_.isEmpty(that.$page.props.access_token)) {
            window[_.get(that.$page.props, 'api', 'axios')].defaults.headers.common['Authorization'] = `Bearer ${that.$page.props.access_token}`;
        }
    },

    created() {
        let that = this;

        console.log("App Created");

        that.stateAppAuthorization({
            api : _.get(that.$page.props, 'api', null),
            state : _.get(that.$page.props, 'state', null)
        });
    },

    mounted() {
        console.log("App Mounted");
    },

    methods: {

    }
}
</script>

<style scoped>

</style>
