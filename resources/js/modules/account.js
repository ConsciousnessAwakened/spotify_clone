
export default {
    namespaced : true,

    state : {
        country: "",
        displayName: "",
        externalUrls: {
            spotify: "spotify_url",
            google: "google_url"
        },
        followers: {
            total: 0
        },
        id: "",
        images: [],
        product: "",
        type: "",
    },

    getters : {
        name: (state) => state.displayName,
        followers: (state) => state.followers.total,
        url : (state, getters, rootState, all) => state.externalUrls[rootState.app.instance.api],
        profile : (state) => _.get(state.images[0], 'url', 'https://picsum.photos/100/100')
    },

    mutations : {
        setData(state, payload) {
            state.displayName = payload.name;
            state.images = payload.images;
            state.followers = payload.followers;
            state.externalUrls = payload.externalUrls;
        }
    },

    actions : {
        getData({commit, dispatch, rootState}) {
            dispatch('request', {
                service : rootState.api[rootState.app.instance.api].account(),
                animateProcess : false,
                successCallback : (response) => {
                    console.log({accountGetData : response});

                    commit('setData', rootState.api[rootState.app.instance.api].responses.account.transformer(response.data));
                }
            }, {root : true});
        }
    }
}
