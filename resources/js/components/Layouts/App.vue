<template>
    <div class="overflow-hidden bg-black">
        <warping-cube/>
        <mood-caster/>

        <div class="absolute px-2 w-full z-40">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import WarpingCube from "../Loaders/WarpingCube";
import MoodCaster from "../Common/MoodCaster";

export default {
    name: "App",

    components: {
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

    mounted() {

    },

    methods: {

    }
}
</script>

<style scoped>

</style>
