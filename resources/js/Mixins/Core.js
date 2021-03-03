
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {

    computed: {
        ...mapState({
            api : state => state.api,
            app : state => state.app
        })
    },

    methods: {
        ...mapActions([
            'startProcessing',
            'finishProcessing',
            'updateApiAuthorizationState',
            'confirmApiAuthorization'
        ])
    }
}
