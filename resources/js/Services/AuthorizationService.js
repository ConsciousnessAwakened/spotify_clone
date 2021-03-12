export default {

    authorize(args) {
        return originDomain.post('/authorization/ask', {
            state : args.state,
            api : args.api
        })
    },

    confirm(args) {
        return originDomain.post('/callback', args)
    }
}
