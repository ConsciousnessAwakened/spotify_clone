
export default {
    namespaced : true,

    state : {
        country: null,
        name: null,
        externalUrls: {
            account: "",
        },
        followers: {
            total: 0
        },
        image: "",
        id: null,
        product: null,
        type: null,
    },

    getters : {
        name: (state) => state.name,
        image : (state) => !_.isEmpty(state.image) ? state.image : 'https://picsum.photos/100/100',
        followers: (state) => state.followers.total,
        accountUrl : (state, getters, rootState, all) => state.externalUrls.account
    },

    mutations : {
        setData(state, payload) {
            state.name = payload.name;
            state.image = payload.image;
            state.followers = payload.followers;
            state.externalUrls = payload.externalUrls;
        }
    },

    actions : {
        getData({commit, dispatch, rootState, rootGetters}) {

            return dispatch('request', {
                service : rootState.api[rootGetters.api].account(),
                animateProcess : false,
                successCallback : (response) => {
                    //console.log({accountGetData : response});

                    commit('setData', transform(response.data, rootState.api[rootGetters.api].transformers.account));
                }
            }, {root : true});
        }
    }
}
