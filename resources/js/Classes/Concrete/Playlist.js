
export default class Playlist {
    constructor(args = {}) {
        this.id = args.id || null;
        this.name = args.name || null;

        this.description = args.description || null;
        this.image = args.image || null;
        this.tracks = args.tracks || null;
        this.owner = args.owner || null;
        this.type = "playlist";

        this.link = args.link || null;
    }
}
