
export let generic = {
    startProcessing({commit}) {
        commit('stateProcess', true);
    },

    finishProcessing({commit}) {
        commit('stateProcess', false);
    },
}

export default {
    ...generic,

    request({state, commit}, payload) {
        commit('stateProcess', true);

        console.log(payload);

        if (typeof payload.service === 'undefined') return false;

        console.log(typeof payload.service);
        console.log(payload.service);

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
            alert(error.response.data.errors.join("\n"));

            if (process.env.MIX_APP_DEBUG) {
                console.log(error.response.data.errors);
            }
        }).then(function () {

        });
    }
}
