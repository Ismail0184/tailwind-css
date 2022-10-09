/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#fc1f15',
        secondary: {
          100: '#8d98ff',
          200: '#636bff',
        }
      },
      fontFamily: {
        'body': ['Montserrat']
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


