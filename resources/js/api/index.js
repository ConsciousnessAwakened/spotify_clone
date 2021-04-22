import Spotify from "../Classes/Concrete/Spotify";
import Pexels from "../Classes/Concrete/Pexels";
import Playlist from "../Classes/Concrete/Playlist";
import Album from "../Classes/Concrete/Album";

export default {
    spotify : new Spotify({
        name : 'spotify',
        address : {
            authorization : 'https://accounts.spotify.com',
            token : 'https://accounts.spotify.com/api/token',
            library : 'https://api.spotify.com/v1',
        },
        images : {
            icon : {
                black : 'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png',
                green : 'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Green.png',
                white : 'images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png',
            },
            logo : {
                black : 'images/spotify/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png',
                green : 'images/spotify/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png',
                white : 'images/spotify/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png',
            }
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
        },
        transformers : {
            account : {
                name : {path : 'display_name', default: 'Display Name'},
                image : {path : 'images', default: '', transform: (images) => images.length ? images[0].url : ""},
                'followers.total' : {path : ['followers.total'], default: 0},
                'externalUrls.account' : {path : 'external_urls.spotify', default: {}}
            },
            playlist : {
                items : {
                    path : 'playlists.items', transform:(items) => {

                        return items.reduce((result, item) => {
                            result.push(new Playlist({
                                id : item.id,
                                name : item.name,
                                description : item.description,
                                image : item.images[0].url,
                                tracks : item.tracks,
                                owner : item.owner,
                                link : item.external_urls.spotify
                            }));

                            return result;
                        },[]);
                    }
                }
            },
            mix : (data) => {
                let common = (item) => {return {
                    id : item.id,
                    name : item.name,
                }};

                let transformable = [
                    {
                        dataProperty : 'playlists',
                        model : (item) => {
                            return new Playlist({
                                ...common(item),
                                description : item.description,
                                image : item.images[0].url,
                                tracks : item.tracks,
                                owner : item.owner,
                                link : item.external_urls.spotify
                            });
                        }
                    },
                    {
                        dataProperty : 'albums',
                        model : (item) => {
                            return new Album({
                                ...common(item),
                                albumType : Text.cWords(item.album_type),
                                artists : item.artists,
                                images : item.images,
                                link : item.external_urls.spotify
                            });
                        }
                    },
                ];

                let transformer = transformable.filter((transformableItem)=>{

                    let templateKey = null;

                    transformable.forEach((template) => {

                        if (_.get(data, template.dataProperty, false)) {
                            templateKey = template.dataProperty;
                        }
                    });

                    return transformableItem.dataProperty === templateKey;
                });

                if (transformer.length) {transformer = transformer[0]};

                return {
                    items : {
                        path : transformer.dataProperty + '.items', transform:(items)=>{
                            return items.reduce((result, item) => {
                                result.push(transformer.model(item));
                                return result;
                            },[]);
                        }
                    }
                };
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
                key : 'photos'
            },
            video : {
                key : 'videos'
            }
        },
        transformers : {
            image : (args) => {
                return args.data.reduce(function(result, item){

                    if (item.src.landscape) {
                        result.push(item.src.landscape);
                    }

                    return result;
                }, []);
            },
            video : (args) => {
                return args.data.reduce(function(result, item){

                    let stack = {
                        duration : item.duration,
                        files : item['video_files'].filter((file) => args.quality === file.quality)
                    };

                    if(stack.duration > 5 && stack.files.length) result.push(stack.files[0].link);

                    return result;
                }, []);
            }
        }
    })
}
