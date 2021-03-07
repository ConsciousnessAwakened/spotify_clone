
export const mutations = {
    stateProcess(state, processing = false) {
        state.app.status.processing = processing;
    }
}
