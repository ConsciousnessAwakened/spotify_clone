
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
    computed: {
        ...mapState({
            api : state => state.api,
            app : state => state.app,
            service : state => state.app.service,
            notification : state => state.notification
        }),
        ...mapGetters({
            requestProcessing : 'processing'
        }),
        ...mapGetters('account',{
            displayName : 'name',
            followers : 'followers',
            accountUrl : 'accountUrl',
            profileImage : 'image'
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
        ...mapActions('moodCaster',{
            bootMoodCaster : 'boot',
        }),
        ...mapActions('account',{
            getAccount : 'getData'
        })
    }
}
