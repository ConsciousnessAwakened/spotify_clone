import Application from "../Abstract/Application";

export default class Pexels extends Application{

    constructor(attributes) {
        super({...attributes});
    }

    image(args) {
        return window[this.appName].get(`${this.libraryAddress}/v1/search/`, args);
    }

    video(args) {
        return window[this.appName].get(`${this.libraryAddress}/videos/search/`, args);
    }
}
