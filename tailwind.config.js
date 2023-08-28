/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {

    extend: {
      colors: {
        'oxford':'#0D2149',
        'red':'#DF2935',
        'blue':'#3772FF',

        'plat':'rgba(224,225,230,0.78)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

