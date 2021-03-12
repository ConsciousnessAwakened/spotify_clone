import * as URL from "url";

export let generic = {
    startProcessing({commit}) {
        commit('stateProcess', true);
    },

    finishProcessing({commit}) {
        commit('stateProcess', false);
    },

    request({state, commit}, payload) {
        commit('stateProcess', true);

        //console.log(payload);

        if (typeof payload.service === 'undefined') return false;

        //console.log(typeof payload.service);
        //console.log(payload.service);

        let service = (typeof payload.service === 'function')
            ? payload.service(payload.args)
            : payload.service;

        service.then(function (response) {

            if (process.env.MIX_APP_DEBUG) {
                console.log(response);
            }

            setTimeout(() => {

                commit('stateProcess', false);
                payload.successCallback(response);
            }, payload.delayedResponse ? 1200 : 0);

        }).catch(function (error) {

            commit('stateProcess', false);

            if (error.response) {

                let errorMessage = _.get(error.response.data, 'errors') || _.get(error.response.data, 'error');

                errorMessage = _.isArray(errorMessage)
                    ? errorMessage.join("\n")
                    : errorMessage.message;

                if (error.response.config.url.startsWith('/')) {
                    // Client Error Response
                    if (process.env.MIX_APP_DEBUG) {
                        console.log(errorMessage);
                        alert(errorMessage);
                        console.log(`ERROR FROM CLIENT`);
                    }

                } else {
                    // Api Error Response
                    let host = URL.parse(error.response.config.url).host.split(".");

                    if (process.env.MIX_APP_DEBUG) {
                        console.log(errorMessage);
                        alert(errorMessage);
                        console.log(`ERROR FROM ${host[1]}`);
                    }

                    if (_.isEqual(host[0], 'api')) {
                        switch (errorMessage) {

                            // Handle Expired Token to Request a new one
                            case state.api[host[1]].responses.error.token.expired.message:
                                state.api[host[1]].authorize({
                                    client_id : state.app.instance.id,
                                    redirect_uri : state.app.instance.redirect_uri,
                                    state : state.app.instance.state
                                });
                                break;
                        }
                    }
                }

            } else if (error.request) {
                // client never received a response, or request never left
                console.log("NO RESPONSE RECEIVED / REQUEST FAILED TO SEND");
                alert("NO RESPONSE RECEIVED / REQUEST FAILED TO SEND");
            } else {
                console.log(error);
                alert(error);
            }

        }).then(function () {

        });
    }
}

export default {
    ...generic,

    stateAppAuthorization({commit}, payload) {
        commit('appInstanceState', payload.state);
        commit('appInstanceApi', payload.api);
    },

    askAuthorization({state, commit, dispatch}, payload) {

        dispatch('request', {
            service : state.app.service.authorize,
            delayedResponse : true,
            args : {
                state : payload.state,
                api : payload.api
            },
            successCallback : () => {
                state.api[payload.api].authorize({
                    client_id : state.app.instance.id,
                    redirect_uri : state.app.instance.redirect_uri,
                    state : payload.state
                });
            }
        });
    },

    authorized({state, dispatch}, payload) {

        dispatch('request', {
            service : state.app.service.confirm(payload),
            successCallback : (response) => {
                if (response.data['isSuccessful']){
                    state.inertia.get('/welcome');
                }
            }
        });
    }
}
