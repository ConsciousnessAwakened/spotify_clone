export const AuthorizationService = {

    updateApiAuthorizationState({}, args) {

        return axios.post('/state', {
            state : args.state
        })
    },

    confirmApiAuthorization({}, args) {
        return axios.post('/callback', args.form)
    }
}
