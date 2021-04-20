
export const mutations = {
    stateProcess(state, processing = false) {
        state.app.status.processing = processing;
    },

    appInstanceState(state, value) {
        state.app.instance.state = value;
    },

    appInstanceApi(state, value) {
        state.app.instance.api = value;
    },

    toggleOverlaySidebar(state) {
        state.app.sideBar.overlay = !state.app.sideBar.overlay;

        // if (state.app.sideBar.overlay) {
        //     document.body.style.setProperty("overflow-y", "hidden");
        // } else {
        //     document.body.style.removeProperty("overflow-y");
        // }
    }
}
