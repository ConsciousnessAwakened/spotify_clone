
export const mutations = {
    stateProcess(state, processing = false) {
        state.app.status.processing = processing;
    },

    appInstanceState(state, value) {
        state.app.instance.state = value;
    },

    appInstanceApi(state, value) {
        state.app.instance.api = value;
    }
}
