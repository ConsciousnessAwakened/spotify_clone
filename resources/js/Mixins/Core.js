
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
    data() {
        return {

        }
    },

    computed: {
        ...mapState({
            api : state => state.api,
            app : state => state.app,
            service : state => state.app.service,
            notification : state => state.notification
        })
    },

    methods: {
        ...mapActions([
            'startProcessing',
            'finishProcessing',
            'request'
        ])
    }
}
