/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#30bcd9',
        secondary: '#024e82',
        whity: '#bad7f9',
        darky: '#0c1d42',
      },
      fontFamily: {
        fugaz: ['Fugaz One']
      }
    },
  },
  plugins: [],
}

