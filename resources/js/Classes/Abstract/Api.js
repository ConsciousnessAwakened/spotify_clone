
export default class Api {

    constructor(attributes) {
        this.address = {
            authorization : attributes.address.authorization || null,
            token : attributes.address.token || null,
            library : attributes.address.library || null,
        }

        this.scopes = attributes.scopes;
    }

    get authorizationAddress() {
        return this.address.authorization;
    }

    get tokenAddress() {
        return this.address.token;
    }

    get libraryAddress() {
        return this.address.library;
    }
}
