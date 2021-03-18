import Spotify from "../Classes/Concrete/Spotify";
import Pexel from "../Classes/Concrete/Pexel";

export default {
    spotify : new Spotify({
        name : 'spotify',
        address : {
            authorization : 'https://accounts.spotify.com',
            token : 'https://accounts.spotify.com/api/token',
            library : 'https://api.spotify.com/v1',
        },
        scopes : [
            {key : 'ugc-image-upload', description : ''},
            {key : 'user-read-recently-played', description : ''},
            {key : 'user-top-read', description : ''},
            {key : 'user-read-playback-position', description : ''},
            {key : 'user-read-playback-state', description : ''},
            {key : 'user-modify-playback-state', description : ''},
            {key : 'user-read-currently-playing', description : ''},
            {key : 'app-remote-control', description : ''},
            {key : 'streaming', description : ''},
            {key : 'playlist-modify-public', description : ''},
            {key : 'playlist-modify-private', description : ''},
            {key : 'playlist-read-private', description : ''},
            {key : 'playlist-read-collaborative', description : ''},
            {key : 'user-follow-modify', description : ''},
            {key : 'user-follow-read', description : ''},
            {key : 'user-library-modify', description : ''},
            {key : 'user-library-read', description : ''},
            {key : 'user-read-email', description : ''},
            {key : 'user-read-private', description : ''}
        ],
        responses : {
            error : {
                token : {
                    expired : {
                        code : 401,
                        message : 'The access token expired'
                    },
                    invalid : {
                        code : 401,
                        message : 'Invalid access token'
                    }
                }
            }
        }
    }),
    pexel : new Pexel({
        name : 'pexel',
        address : {
            library : 'https://api.pexels.com',
        }
    })
}
