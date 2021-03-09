
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
