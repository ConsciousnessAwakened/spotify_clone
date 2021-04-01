
export default {
    namespaced : true,

    state : {
        lists : {
            'featured' : {}
        }
    },

    getters : {
        featuredLists: (state) => state.lists.featured
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

            dispatch('request', {
                service : rootState.api[rootGetters.api].featured(),
                animateProcess : false,
                successCallback : (response) => {
                    console.log({getFeatured : response});

                    commit('putList', {'featured' : transform(response.data, rootState.api[rootGetters.api].transformers.featured).items});
                }
            }, {root : true});
        }
    }
}
