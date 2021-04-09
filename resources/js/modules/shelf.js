
export default {
    namespaced : true,

    state : {
        lists : {
            'featured' : {value : [], loaded : false},
            'newRelease' : {value : [], loaded : false},
        }
    },

    getters : {
        featured: (state) => state.lists.featured.value,
        newRelease: (state) => state.lists.newRelease.value,
    },

    mutations : {
        putList(state, payload) {
            Object.keys(payload).forEach((key) => {
                state.lists = {...state.lists, [key] : {value : payload[key], loaded : true}};
            });
        }
    },

    actions : {
        getFeatured({state, commit, dispatch, rootState, rootGetters}) {

            return dispatch('request', {
                service : rootState.api[rootGetters.api].featured(),
                animateProcess : false,
                delayedResponse : 400,
                loaded : state.lists['featured'].loaded,
                successCallback : (response) => {
                    console.log({getFeatured : response});

                    let transformedViaMix = transform(
                        response.data,
                        rootState.api[rootGetters.api].transformers.mix(response.data)
                    ).items;

                    commit('putList', {'featured' : transformedViaMix});
                }
            }, {root : true});
        },

        getNewReleases({state, commit, dispatch, rootState, rootGetters}) {

            return dispatch('request', {
                service : rootState.api[rootGetters.api].newRelease(),
                animateProcess : false,
                delayedResponse : 900,
                loaded : state.lists['newRelease'].loaded,
                successCallback : (response) => {
                    console.log({getNewReleases : response});

                    let transformedViaMix = transform(
                        response.data,
                        rootState.api[rootGetters.api].transformers.mix(response.data)
                    ).items;

                    commit('putList', {'newRelease' : transformedViaMix});
                }
            }, {root : true});
        },
    }
}
