/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
   "./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  extend: {
    fontFamily: {
      chivo: ['"Chivo"', ...defaultTheme.fontFamily.sans],
      playfair: ['"Playfair"', ...defaultTheme.fontFamily.serif]
    },
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    variants: {
      animation: ["motion-safe"]
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
