
export default class Album {
    constructor(args = {}) {
        this.albumType = args.albumType;
        this.artists = args.artists;
        this.id = args.id;
        this.images = args.images;
        this.name = args.name;
        this.type = "album";
    }
}

