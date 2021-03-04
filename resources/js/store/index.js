require('../bootstrap');

import Vue from "vue";
import Vuex from 'vuex';
import actions from "./actions";
import { mutations } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        api : {
            spotify : {
                address : {
                    authorization : 'https://accounts.spotify.com',
                    library : 'https://api.spotify.com'
                },
                scopes : [
                    {key : 'ugc-image-upload', description : ''},
                    {key : 'user-read-recently-played', description : ''},
                    {key : 'user-top-read', description : ''},
                    {key : 'user-read-playback-position', description : ''},
                    {key : 'user-read-playback-state', description : ''},
                    {key : 'user-modify-playback-state', description : ''},
                    {key : 'user-read-currently-playing', description : ''},
                    {key : 'app-remote-control', description : ''},
                    {key : 'streaming', description : ''},
                    {key : 'playlist-modify-public', description : ''},
                    {key : 'playlist-modify-private', description : ''},
                    {key : 'playlist-read-private', description : ''},
                    {key : 'playlist-read-collaborative', description : ''},
                    {key : 'user-follow-modify', description : ''},
                    {key : 'user-follow-read', description : ''},
                    {key : 'user-library-modify', description : ''},
                    {key : 'user-library-read', description : ''},
                    {key : 'user-read-email', description : ''},
                    {key : 'user-read-private', description : ''}
                ]
            }
        },
        app : {
            status : {
                processing : true
            },
            notification : new Statement(['info', 'warning', 'error'])
        },
    },
    mutations,
    actions
});
