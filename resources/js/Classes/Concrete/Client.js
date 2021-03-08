import Application from "../Abstract/Application";

export default class Client extends Application{

    constructor(attributes) {
        super({});

        this.id = attributes.id || null;
        this.secret = attributes.secret || null;
        this.redirect_uri = attributes.redirect_uri || null;
    }
}
