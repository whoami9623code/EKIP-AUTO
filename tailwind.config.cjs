/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      laptop: '1900px',

    },
    extend: {


      fontFamily: {
        'arial': ['Arial Regular'],
        'myriad': ['Myriad Pro Regular']
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

});
