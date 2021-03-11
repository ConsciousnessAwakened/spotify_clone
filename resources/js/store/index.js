require('../bootstrap');

import Vuex from 'vuex';
import actions from "./actions";
import { mutations } from "./mutations";
import services from "./services";
import api from "../api";
import Client from "../Classes/Concrete/Client";

window.Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        api : api,
        app : {
            instance : new Client({
                id : process.env.MIX_APP_ID,
                secret : process.env.MIX_APP_SECRET,
                redirect_uri : process.env.MIX_APP_CALLBACK
            }),
            service : services,
            status : {
                processing : true
            }
        },
        notification : new Statement({types : ['info', 'warning']})
    },
    mutations,
    actions,
    devtools : process.env.MIX_APP_DEBUG
});
