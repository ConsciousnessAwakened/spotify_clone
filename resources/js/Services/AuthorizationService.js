export default {

    updateApiAuthorizationState(args) {
        return originDomain.post('/state', {
            state : args.data
        })
    },

    confirmApiAuthorization(args) {
        return originDomain.post('/callback', args.data)
    }
}
