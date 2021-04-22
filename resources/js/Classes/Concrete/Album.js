
export default class Album {
    constructor(args = {}) {
        this.id = args.id || null;
        this.name = args.name || null;

        this.albumType = args.albumType || null;
        this.artists = args.artists || [];
        this.images = args.images || [];
        this.type = "album";

        this.link = args.link || null;
    }
}

