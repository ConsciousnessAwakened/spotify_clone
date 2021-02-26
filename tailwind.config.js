
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
