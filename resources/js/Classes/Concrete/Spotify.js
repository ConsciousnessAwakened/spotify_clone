import Application from "../Abstract/Application";

export default class Spotify extends Application{

    constructor(attributes) {
        super({...attributes});
    }

    authorize(args) {
        let uri = this.authorizationAddress + "/authorize?";

        uri = uri + Obj.serialize({
            response_type : 'token',
            scope : Collection.concatKeys(this.scopes, 'key', ' '),
            ...args
        });

        window.location = uri;
    }

    account() {
        return window.crossDomain.get(`${this.libraryAddress}/me`);
    }
}
