/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        'video-portrait': '9 / 16'
      },
      lineHeight: {
        'zero': '0'
      }
    },
  },
  plugins: [require("daisyui")],
}