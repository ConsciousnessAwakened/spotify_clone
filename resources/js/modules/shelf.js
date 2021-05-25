
export default {
    namespaced : true,

    state : {
        lists : {
            spotify : {
                'featured' : {value : [], loaded : false},
                'newRelease' : {value : [], loaded : false},
            }
        }
    },

    getters : {
        spotifyFeatured: (state) => state.lists.spotify.featured.value,
        spotifyNewRelease: (state) => state.lists.spotify.newRelease.value,
    },

    mutations : {
        putList(state, payload) {
            Object.keys(payload.value).forEach((key) => {
                state.lists[payload.source] = {
                    ...state.lists[payload.source],
                    [key] : {value : payload.value[key], loaded : true}
                };
            });
        }
    },

    actions : {
        getFeatured({state, commit, dispatch, rootState, rootGetters}, payload) {

            return dispatch('request', {
                //service : rootState.api[rootGetters.api].featured(),
                service : rootState.api[payload.source].featured(),
                animateProcess : false,
                delayedResponse : 400,
                loaded : state.lists[payload.source]['featured'].loaded,
                successCallback : (response) => {
                    console.log({getFeatured : response});

                    let transformedViaMix = transform(
                        response.data,
                        rootState.api[payload.source].transformers.mix(response.data)
                    ).items;

                    commit('putList', {
                        source : payload.source,
                        value : {
                            'featured' : transformedViaMix
                        }
                    });
                }
            }, {root : true});
        },

        getNewReleases({state, commit, dispatch, rootState, rootGetters}, payload) {

            return dispatch('request', {
                //service : rootState.api[rootGetters.api].newRelease(),
                service : rootState.api[payload.source].newRelease(),
                animateProcess : false,
                delayedResponse : 900,
                loaded : state.lists[payload.source]['newRelease'].loaded,
                successCallback : (response) => {
                    console.log({getNewReleases : response});

                    let transformedViaMix = transform(
                        response.data,
                        rootState.api[payload.source].transformers.mix(response.data)
                    ).items;

                    commit('putList', {
                        source : payload.source,
                        value : {
                            'newRelease' : transformedViaMix
                        }
                    });
                }
            }, {root : true});
        },
    }
}
