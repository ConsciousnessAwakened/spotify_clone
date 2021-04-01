
export default class Playlist {
    constructor(args = {}) {
        this.name = args.name;
        this.description = args.description;
        this.image = args.image;
        this.tracks = args.tracks;
        this.owner = args.owner;
    }
}
