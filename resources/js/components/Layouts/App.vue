<template>
    <div class="overflow-hidden bg-black">
        <warping-cube :processing="app.status.processing"/>

        <!--<transition
            enter-active-class="animate-fade-in"
            leave-active-class="animate-fade-out">
            <video v-if="playerA.status" autoplay muted class="absolute z-30 object-cover w-full h-full">
                <source
                    :src="playerA.src"
                    type="video/mp4"/>Your browser does not support the video tag.
            </video>
        </transition>

        <transition
            enter-active-class="animate-fade-in"
            leave-active-class="animate-fade-out">
            <video v-if="playerB.status" autoplay muted class="absolute z-30 object-cover w-full h-full">
                <source
                    :src="playerB.src"
                    type="video/mp4"/>Your browser does not support the video tag.
            </video>
        </transition>-->

        <!--<transition
            enter-active-class="animate-fade-in"
            leave-active-class="animate-fade-out">
            <img v-show="playerA.status" class="absolute z-30 object-cover w-full h-full" :src="playerA.src" />
        </transition>

        <transition
            enter-active-class="animate-fade-in"
            leave-active-class="animate-fade-out">
            <img v-show="playerB.status" class="absolute z-30 object-cover w-full h-full" :src="playerB.src" />
        </transition>-->

        <div class="absolute z-40 w-full h-full">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import WarpingCube from "../Loaders/WarpingCube";

export default {
    name: "App",

    components: {
        WarpingCube
    },

    data() {
        return {
            playerA : {
                status : true,
                src : ''
            },
            playerB : {
                status : false,
                src : ''
            },
            playerIndex : 0,
            media : [
                //clouds
                {
                    link : 'https://player.vimeo.com/external/368748183.hd.mp4?s=a08e0776d3956fe948838e92b880e587dbb1020d&profile_id=172&oauth2_token_id=57447761',
                    file_type : 'video/mp4',
                },
                //sunset
                {
                    link : 'https://player.vimeo.com/external/294394804.hd.mp4?s=d8437c0fc1b6b8bf04089697cb0d68bd7072e9b1&profile_id=174&oauth2_token_id=57447761',
                    file_type : 'video/mp4',
                },
                //clouds
                {
                    link : 'https://player.vimeo.com/external/368745224.hd.mp4?s=4f9918d1a2a128c20b807b15eba4d8837590c94c&profile_id=170&oauth2_token_id=57447761',
                    file_type : 'video/mp4',
                },
                //universe
                {
                    link : 'https://player.vimeo.com/external/314181352.hd.mp4?s=03e7a8ddba6566f8a62cd7f8a8da7d79461c3dbd&profile_id=170&oauth2_token_id=57447761'
                },
                //lovers
                {
                    link : 'https://player.vimeo.com/external/438464616.hd.mp4?s=fea8a26dde2a1379348251c50fddbd817809979d&profile_id=169&oauth2_token_id=57447761',
                    file_type : 'video/mp4',
                },
                {
                    link : 'https://player.vimeo.com/external/459298282.hd.mp4?s=76508b6fbdd2018e7f38a4837098839a8f63b177&profile_id=170&oauth2_token_id=57447761',
                    file_type : 'video/mp4',
                },
                {
                    link : 'https://player.vimeo.com/external/433070576.hd.mp4?s=5351fdd89f3a6b929f4175fd347e9a90ef3f5f3f&profile_id=172&oauth2_token_id=57447761',
                    file_type : 'video/mp4',
                },
                {
                    link : 'https://player.vimeo.com/external/448223840.hd.mp4?s=a3b4815e7eaea16d1b65eccf9a7ddc2f6a531207&profile_id=169&oauth2_token_id=57447761'
                },
                {
                    link : 'https://player.vimeo.com/external/448795470.hd.mp4?s=31e7112027dfd57ca9f032897d81049ea74d8213&profile_id=169&oauth2_token_id=57447761'
                },
                //rain
                {
                    link : 'https://player.vimeo.com/external/342387372.hd.mp4?s=12160df5040510bb037798bce876b30ab20c5b3b&profile_id=172&oauth2_token_id=57447761'
                },
                {
                    link : 'https://player.vimeo.com/external/310438775.hd.mp4?s=2ffe0ba9beae4f3dee6348a0923c6a360696a03e&profile_id=174&oauth2_token_id=57447761'
                },
                {
                    link : 'https://player.vimeo.com/external/393975453.hd.mp4?s=1feb52fe970b831ee8aab28d99571c7523de9fa6&profile_id=175&oauth2_token_id=57447761'
                },
                //slow motion
                {
                    link : 'https://player.vimeo.com/external/368558120.hd.mp4?s=13099dc52bd90645a11976d7ed7f8475fa275f74&profile_id=175&oauth2_token_id=57447761'
                },
                {
                    link : 'https://player.vimeo.com/external/363625327.hd.mp4?s=a283f7b8f1d1ed97cbb8fc90b871902f3a1e74d1&profile_id=174&oauth2_token_id=57447761'
                },
                {
                    link : 'https://player.vimeo.com/external/377073171.hd.mp4?s=df4c3d6940d0abb1f6faa3b2e2b0a8f0e0a25a8f&profile_id=175&oauth2_token_id=57447761'
                },
                {
                    link : 'https://player.vimeo.com/external/345204873.hd.mp4?s=89e452fea9dffe72b7282e4facb3d58e4922959e&profile_id=174&oauth2_token_id=57447761'
                },
            ],
            images : [
                //lovers
                'https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/2249172/pexels-photo-2249172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/3217456/pexels-photo-3217456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/1459583/pexels-photo-1459583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                //sad lovers
                'https://images.pexels.com/photos/50592/heartsickness-lover-s-grief-lovesickness-coupe-50592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://images.pexels.com/photos/3692885/pexels-photo-3692885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            ]
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

        // let that = this;
        //
        // that.playerA.src = that.media[that.getIndex()].link;
        // that.playerB.src = that.media[that.getIndex()].link;
        //
        // setInterval(()=>{
        //
        //     that.playerA.status = !that.playerA.status;
        //     that.playerB.status = !that.playerB.status;
        //
        //     that.getNewIndex();
        //
        // }, 6000);
    },

    methods: {
        getIndex() {
            let that = this;

            if (that.playerIndex === (that.media.length)) {
                that.playerIndex = 0;
            }

            return that.playerIndex++;
        },

        getNewIndex() {

            let that = this;

            setTimeout(() => {
                if (that.playerA.status) {
                    that.playerB.src = that.media[that.getIndex()].link;
                } else {
                    that.playerA.src = that.media[that.getIndex()].link;
                }
            }, 3500);


        }
    }
}
</script>

<style scoped>

</style>
