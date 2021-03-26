import Spotify from "../Classes/Concrete/Spotify";
import Pexels from "../Classes/Concrete/Pexels";

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
            },
            account : {
                transformer : (data) => {
                    return {
                        name : data.display_name || '',
                        images : data.images || [],
                        followers : data.followers || {total : 0},
                        externalUrls : data.external_urls || {}
                    };
                }
            }
        }
    }),
    pexels : new Pexels({
        name : 'pexels',
        address : {
            library : 'https://api.pexels.com',
        },
        key : process.env.MIX_PEXEL_TOKEN,
        responses : {
            image : {
                key : 'photos',
                transformer : function(item, quality) {
                    return item.src.large2x;
                }
            },
            video : {
                key : 'videos',
                transformer : function(item, quality) {

                    if (item.duration < 6) { return null; }

                    let high = item.video_files.filter(video => video.quality == OVERLAY_QUALITY.HIGH);
                    let low = item.video_files.filter(video => video.quality == OVERLAY_QUALITY.LOW);

                    //console.log({duration : item.duration, high : high.length, low : low.length});

                    let source = null

                    switch (quality){
                        case OVERLAY_QUALITY.HIGH:
                            source = high.length ? high[0].link : low[0].link;
                            break;
                        case OVERLAY_QUALITY.LOW:
                            source = low[0].link;
                            break;
                    }

                    return source;
                }
            }
        }
    })
}
