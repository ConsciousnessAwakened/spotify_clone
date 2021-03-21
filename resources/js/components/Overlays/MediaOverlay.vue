<template>
    <div>
        <div v-if="type === 'video'">
            <fade :initial=true>
                <video v-if="stack.visible" autoplay muted class="absolute z-30 object-cover w-full h-full">
                    <source :src="stack.src">Your browser does not support the video tag.
                </video>
            </fade>
            <fade>
                <video v-if="anotherStack.visible" autoplay muted class="absolute z-30 object-cover w-full h-full">
                    <source :src="anotherStack.src">Your browser does not support the video tag.
                </video>
            </fade>
        </div>

        <div v-if="type === 'image'">
            <fade :initial=true>
                <img v-if="stack.visible" :src="stack.src" class="absolute z-30 object-cover w-full h-full">
            </fade>
            <fade>
                <img v-if="anotherStack.visible" :src="anotherStack.src" class="absolute z-30 object-cover w-full h-full">
            </fade>
        </div>
    </div>
</template>

<script>
import Fade from "../Transitions/Fade";
import {mapGetters} from "vuex";

export default {
    name: "MediaOverlay",

    components: {
        Fade
    },

    props: {
        overlayType: {
            type: String,
            default: null
        }
    },

    computed : {
        ...mapGetters('overlay',[
            'type',
            'stack',
            'anotherStack'
        ])
    },

    data() {
        return {
            oldData : {
                stack : {
                    visible : false,
                    src : ''
                },
                anotherStack : {
                    visible : false,
                    src : ''
                },
                stackIndex : 0,
                video : [],
                image : [],
            },
            videos : [
                //clouds
                {link : 'https://player.vimeo.com/external/368748183.hd.mp4?s=a08e0776d3956fe948838e92b880e587dbb1020d&profile_id=172&oauth2_token_id=57447761',},
                //sunset
                {link : 'https://player.vimeo.com/external/294394804.hd.mp4?s=d8437c0fc1b6b8bf04089697cb0d68bd7072e9b1&profile_id=174&oauth2_token_id=57447761',},
                //clouds
                {link : 'https://player.vimeo.com/external/368745224.hd.mp4?s=4f9918d1a2a128c20b807b15eba4d8837590c94c&profile_id=170&oauth2_token_id=57447761',},
                //universe
                {link : 'https://player.vimeo.com/external/314181352.hd.mp4?s=03e7a8ddba6566f8a62cd7f8a8da7d79461c3dbd&profile_id=170&oauth2_token_id=57447761'},
                //lovers
                {link : 'https://player.vimeo.com/external/438464616.hd.mp4?s=fea8a26dde2a1379348251c50fddbd817809979d&profile_id=169&oauth2_token_id=57447761',},
                {link : 'https://player.vimeo.com/external/459298282.hd.mp4?s=76508b6fbdd2018e7f38a4837098839a8f63b177&profile_id=170&oauth2_token_id=57447761',},
                {link : 'https://player.vimeo.com/external/433070576.hd.mp4?s=5351fdd89f3a6b929f4175fd347e9a90ef3f5f3f&profile_id=172&oauth2_token_id=57447761',},
                {link : 'https://player.vimeo.com/external/448223840.hd.mp4?s=a3b4815e7eaea16d1b65eccf9a7ddc2f6a531207&profile_id=169&oauth2_token_id=57447761'},
                {link : 'https://player.vimeo.com/external/448795470.hd.mp4?s=31e7112027dfd57ca9f032897d81049ea74d8213&profile_id=169&oauth2_token_id=57447761'},
                //rain
                {link : 'https://player.vimeo.com/external/342387372.hd.mp4?s=12160df5040510bb037798bce876b30ab20c5b3b&profile_id=172&oauth2_token_id=57447761'},
                {link : 'https://player.vimeo.com/external/310438775.hd.mp4?s=2ffe0ba9beae4f3dee6348a0923c6a360696a03e&profile_id=174&oauth2_token_id=57447761'},
                {link : 'https://player.vimeo.com/external/393975453.hd.mp4?s=1feb52fe970b831ee8aab28d99571c7523de9fa6&profile_id=175&oauth2_token_id=57447761'},
                //slow motion
                {link : 'https://player.vimeo.com/external/368558120.hd.mp4?s=13099dc52bd90645a11976d7ed7f8475fa275f74&profile_id=175&oauth2_token_id=57447761'},
                {link : 'https://player.vimeo.com/external/363625327.hd.mp4?s=a283f7b8f1d1ed97cbb8fc90b871902f3a1e74d1&profile_id=174&oauth2_token_id=57447761'},
                {link : 'https://player.vimeo.com/external/377073171.hd.mp4?s=df4c3d6940d0abb1f6faa3b2e2b0a8f0e0a25a8f&profile_id=175&oauth2_token_id=57447761'},
                {link : 'https://player.vimeo.com/external/345204873.hd.mp4?s=89e452fea9dffe72b7282e4facb3d58e4922959e&profile_id=174&oauth2_token_id=57447761'},
            ],
            images : [
                //lovers
                {link:'https://images.pexels.com/photos/888899/pexels-photo-888899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
                {link:'https://images.pexels.com/photos/2249172/pexels-photo-2249172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
                {link:'https://images.pexels.com/photos/3217456/pexels-photo-3217456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
                {link:'https://images.pexels.com/photos/1459583/pexels-photo-1459583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
                {link:'https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},

                //sad lovers
                {link:'https://images.pexels.com/photos/50592/heartsickness-lover-s-grief-lovesickness-coupe-50592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
                {link:'https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
                {link:'https://images.pexels.com/photos/3692885/pexels-photo-3692885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
            ]
        }
    },

    mounted() {
        this.bootOverlay();
    },

    methods: {
        getIndex() {
            let that = this;

            if (!that[that.type].length) {
                return 0;
            }

            if (that.stackIndex >= (that[that.type].length)) {
                that.stackIndex = 0;
            }

            return that.stackIndex++;
        },

        getNewIndexBehindScenes() {

            let that = this;

            setTimeout(() => {
                if (that.stack.visible) {
                    that.anotherStack.src = that[that.type][that.getIndex()];
                } else {
                    that.stack.src = that[that.type][that.getIndex()];
                }
            }, 3500);
        },

        getStack() {
            let that = this;

            let overlayApi = that.app.overlay.api;
            let typeResponseKey = that.api[overlayApi].responses[that.type].key;

            that.request({
                service : that.api[overlayApi][that.type]({
                    params : that.api[overlayApi].meta({search : that.app.overlay.meta})
                }),
                animateProcess : false,
                successCallback : (response) => {
                    that[that.type] = response.data[typeResponseKey].reduce(function(result, item){

                        let stack = that.api[overlayApi].responses[that.type].transformer(item, that.app.overlay.stack.quality);

                        if (stack) {
                            result.push(stack);
                        }

                        return result;
                    }, []);

                    that.iterate();
                }
            });
        },

        iterate() {
            let that = this;

            if (that[that.type].length) {

                that.stack.src = that[that.type][that.getIndex()];
                that.anotherStack.src = that[that.type][that.getIndex()];

                that.stack.visible = true;

                setInterval(() => {

                    that.stack.visible = !that.stack.visible;
                    that.anotherStack.visible = !that.anotherStack.visible;

                    if (that[that.type].length) {
                        console.log('Hidden Stack Must Update With New Source');
                        that.getNewIndexBehindScenes();
                    }

                }, 6000);
            }
        }
    }
}
</script>

<style scoped>

</style>
