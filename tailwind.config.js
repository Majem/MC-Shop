const colors  = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./resources/**/*.{js,ts,jsx,tsx,vue}",
        "./lang/*.json",
    ],
  theme: {
      extend: {
          colors: {
              'primary':colors.green,
          }
      },
  },
  plugins: [],
}

