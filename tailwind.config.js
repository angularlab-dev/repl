/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DD0031',
        purePrimary: '#ff003b',
        active: '#ff0062',
      }
    },
  },
  plugins: [],
}

