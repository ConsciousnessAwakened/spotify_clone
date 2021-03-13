
const colors = require('tailwindcss/colors')

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
            keyframes: {
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
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-out-down': 'fade-out-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-out-up': 'fade-out-up 0.5s ease-out'
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
        },
        colors: {
            ...colors,
            codeBlue : {
                primary : '#76b8f1',
                primaryTrans : 'rgba(118, 184, 241, 0.5)',
                lightTrans : 'rgba(181,197,221,0.5)',
                secondary : '#f2f2f2'
            }
        }
    },

    variants: {
        extend: {},
    },

    plugins: [],
}
