
export const mutations = {
    statePageProcess(state, processing = false){

        state.app.status.processing = processing;
    },
}
