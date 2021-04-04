
export default {
    namespaced : true,

    state : {
        lists : {
            'featured' : [],
            'newRelease' : []
        }
    },

    getters : {
        featured: (state) => state.lists.featured,
        newRelease: (state) => state.lists.newRelease,
    },

    mutations : {
        putList(state, payload) {
            Object.keys(payload).forEach((key) => {
                state.lists = {...state.lists, [key] : payload[key]};
            });
        }
    },

    actions : {
        getFeatured({commit, dispatch, rootState, rootGetters}) {

            return dispatch('request', {
                service : rootState.api[rootGetters.api].featured(),
                animateProcess : false,
                delayedResponse : 400,
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

        getNewReleases({commit, dispatch, rootState, rootGetters}) {

            return dispatch('request', {
                service : rootState.api[rootGetters.api].newRelease(),
                animateProcess : false,
                delayedResponse : 900,
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
