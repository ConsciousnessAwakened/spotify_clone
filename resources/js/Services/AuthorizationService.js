export const AuthorizationService = {

    updateApiAuthorizationState({}, args) {

        return axios.post('/state', {
            state : args.state
        })
    }
}
