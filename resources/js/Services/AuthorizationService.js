export const AuthorizationService =  {

    updateApiAuthorizationState(args) {
        return axios.post('/state', {
            state : args.data
        })
    },

    confirmApiAuthorization(args) {
        return axios.post('/callback', args.data)
    }
}
