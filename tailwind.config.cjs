/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'grey-dark': '#1f2028'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
