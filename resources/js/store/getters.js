
export default {
    api : (state) => state.app.instance.api,
    processing : (state) => state.app.status.processing,
    overlaySideBar : (state) => state.app.sideBar.overlay
}
