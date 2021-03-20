import Application from "../Abstract/Application";

export default class Pexels extends Application{

    constructor(attributes) {
        super({...attributes});
    }

    meta(args) {
        return {
            query : args.search.search,
            page : args.search.page,
            per_page : args.search.per_page
        }
    }

    image(args) {
        return window[this.appName].get(`${this.libraryAddress}/v1/search/`, args);
    }

    video(args) {
        return window[this.appName].get(`${this.libraryAddress}/videos/search/`, args);
    }
}
