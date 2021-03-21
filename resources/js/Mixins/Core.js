
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
    computed: {
        ...mapGetters({
            requestProcessing : 'processing'
        }),
        ...mapState({
            api : state => state.api,
            app : state => state.app,
            service : state => state.app.service,
            notification : state => state.notification
        })
    },

    methods: {
        ...mapActions([
            'request',
            'startProcessing',
            'finishProcessing',
            'stateAppAuthorization',
            'askAuthorization',
            'authorized'
        ]),
        ...mapActions('overlay',{
            bootOverlay : 'boot',
        })
    }
}
