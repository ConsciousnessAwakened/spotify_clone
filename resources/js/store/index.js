require('../bootstrap');

import Vuex from 'vuex';
import { mutations } from "./mutations";
import actions from "./actions";
import services from "./services";
import api from "../api";
import Client from "../Classes/Concrete/Client";
import overlay from "../modules/overlay";

window.Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        overlay
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
            overlay : {
                api : 'pexels',
                stack : {
                    curated : false,
                    quality : OVERLAY_QUALITY.HIGH,
                    type : OVERLAY_TYPE.VIDEO
                },
                meta : {
                    search : 'abstract',
                    page : 1,
                    per_page : 20
                },
            }
        },
        notification : new Statement({types : ['info', 'warning']})
    },
    mutations,
    actions,
    devtools : process.env.MIX_APP_DEBUG
});
