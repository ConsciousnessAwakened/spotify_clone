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

            setTimeout(() => {

                commit('stateProcess', false);
                payload.successCallback(response);
            }, payload.delayedResponse ? 1200 : 0);

        }).catch(function (error) {

            commit('stateProcess', false);

            let errorMessage = _.get(error.response.data, 'errors') || _.get(error.response.data, 'error');
            errorMessage = _.isArray(errorMessage) ? errorMessage.join("\n") : errorMessage.message;
            if (process.env.MIX_APP_DEBUG) {console.log(errorMessage); alert(errorMessage);}

            let host = URL.parse(error.response.config.url.toString()).host.split(".");

            if (_.isEqual(host[0], 'api')) {
                switch (errorMessage) {

                    case state.api[host[1]].responses.error.token.expired.message:
                        state.api[host[1]].authorize({
                            client_id : state.app.instance.id,
                            redirect_uri : state.app.instance.redirect_uri,
                            state : state.app.instance.state
                        });
                        break;
                }
            }

        }).then(function () {

        });
    }
}

export default {
    ...generic,

    appState({commit}, payload) {

        commit('appInstanceState', payload.state);
    },

    appApi({commit}, payload) {

        commit('appInstanceState', payload.state);
        commit('appInstanceApi', payload.api);
    }
}
