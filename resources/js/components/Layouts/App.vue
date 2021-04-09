<template>
    <div>
        <warping-cube/>
        <mood-caster/>

        <slot name="side"></slot>

        <div class="absolute w-full z-30">
            <slot name="header"></slot>

            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import WarpingCube from "../Loaders/WarpingCube";
import MoodCaster from "../Common/MoodCaster";
import Overlay from "../Side/Overlay";

export default {
    name: "App",

    components: {
        OverlaySidebar : Overlay,
        MoodCaster,
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

        if (!_.isEmpty(that.$page.props.access_token)) {
            window[_.get(that.$page.props, 'api', 'axios')].defaults.headers.common['Authorization'] = `Bearer ${that.$page.props.access_token}`;
        }
    },

    created() {
        let that = this;

        that.stateAppAuthorization({
            api : _.get(that.$page.props, 'api', null),
            state : _.get(that.$page.props, 'state', null)
        });
    },

    methods: {

    }
}
</script>

<style scoped>

</style>
