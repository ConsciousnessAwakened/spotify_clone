
module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],

    darkMode: false, // or 'media' or 'class'

    theme: {
        extend: {
            fontFamily : {
                sans : ['Inter', 'Roboto']
            },
            colors : {
                codeBlue : {
                    primary : '#76b8f1',
                    primaryTrans : 'rgba(118, 184, 241, 0.5)',
                    lightTrans : 'rgba(181,197,221,0.5)',
                    secondary : '#f2f2f2'
                },
                bilberry : {
                    dark : '#0064B2',
                    primary : '#2B7EBF',
                    primaryTrans : 'rgba(43, 126, 191, 0.5)',
                    secondary : '#f2f2f2',
                    light : '#ACCCE6'
                },
                spotify : {
                    green : 'rgb(30, 215, 96)',
                    darkGreen : '#1DB954',
                    white : 'rgb(255, 255, 255)',
                    black : 'rgb(25, 20, 20)',
                },
            },
            keyframes: {
                'fade-in' : {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    },
                },
                'fade-out' : {
                    '0%': {
                        opacity: '1'
                    },
                    '100%': {
                        opacity: '0'
                    },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-down': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'fade-out-up': {
                    'from': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    'to': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                }
            },
            animation: {
                'fade-in' : 'fade-in 3s ease-in-out',
                'fade-out' : 'fade-out 3s ease-in-out',
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-out-down': 'fade-out-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-out-up': 'fade-out-up 0.5s ease-out'
            },
            transitionDuration: {
                '1500': '1500ms',
                '2500': '2500ms',
            },
            width : {
                'sidebar' : '230px'
            },
            spacing : {
                'sidebar' : '230px',
                'installApp' : '38px',
                'cover' : '230px',
                'playbar' : '90px',

                'InstallApp-cover' : '268px',
                'cover-playbar': '320px',
                'InstallApp-cover-playbar' : '358px',

                'InstallApp-playbar' : '128px'
            }
        }
    },

    variants: {
        extend: {},
    },

    plugins: [],
}
