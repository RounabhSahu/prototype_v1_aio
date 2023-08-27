/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',"./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {

    extend: {
      colors: {
        'oxford':'#0D2149',
        'red':'#DF2935',
        'blue':'#3772FF',

        'plat':'#F4FFF8'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),require("tw-elements/dist/plugin.cjs"),
  ],
}

