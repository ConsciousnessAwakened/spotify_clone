
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

        payload.service(
            payload.args
        ).then(function (response) {

            setTimeout(() => {

                commit('stateProcess', false);
                payload.successCallback(response);
            }, payload.delayed ? 1200 : 0);

        }).catch(function (error) {

            commit('stateProcess', false);
            alert(error.response.data.errors.join("\n"));
            console.log(error.response.data.errors);
        }).then(function () {

        });
    }
}
