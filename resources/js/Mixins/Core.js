
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {

    computed: {
        ...mapState({
            app : state => state.app
        })
    },

    methods: {
        ...mapActions([
            'startProcessing',
            'finishProcessing',
            'updateApiAuthorizationState'
        ])
    }
}
