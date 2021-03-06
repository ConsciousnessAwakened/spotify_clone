
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
            requestProcessing : 'processing',
            overlaySideBar : 'overlaySideBar'
        }),
        ...mapGetters('account',{
            displayName : 'name',
            followers : 'followers',
            accountUrl : 'accountUrl',
            profileImage : 'image'
        }),
        ...mapGetters('shelf', {
            spotifyFeatured : 'spotifyFeatured',
            spotifyNewRelease : 'spotifyNewRelease'
        })
    },

    methods: {
        ...mapMutations([
            'toggleOverlaySidebar'
        ]),
        ...mapActions([
            'request',
            'startProcessing',
            'finishProcessing',
            'stateAppAuthorization',
            'askAuthorization',
            'authorized',
        ]),
        ...mapActions('moodCaster',{
            bootMoodCaster : 'boot',
        }),
        ...mapActions('account',{
            getAccount : 'getData'
        }),
        ...mapActions('shelf',[
            'getFeatured',
            'getNewReleases'
        ])
    }
}
