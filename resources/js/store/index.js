require('../bootstrap');

import Vuex from 'vuex';
import { mutations } from "./mutations";
import getters from "./getters";
import actions from "./actions";
import services from "./services";
import api from "../api";
import Client from "../Classes/Concrete/Client";
import moodCaster from "../modules/mood/caster";

window.Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        moodCaster
    },
    state : {
        api : api,
        app : {
            instance : new Client({
                id : process.env.MIX_APP_ID,
                secret : process.env.MIX_APP_SECRET,
                redirect_uri : process.env.MIX_APP_CALLBACK,
                state : null,
                api : null
            }),
            service : services,
            status : {
                processing : true
            },
            mood : {
                api : 'pexels',
                stack : {
                    curated : false,
                    quality : OVERLAY_QUALITY.HIGH,
                    type : OVERLAY_TYPE.IMAGE
                },
                meta : {
                    search : 'snow',
                    page : 1,
                    per_page : 15
                },
            }
        },
        notification : new Statement({types : ['info', 'warning']})
    },
    getters,
    mutations,
    actions,
    devtools : process.env.MIX_APP_DEBUG
});
