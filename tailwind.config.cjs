/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-dark': '#1f2028'
      },
      borderWidth: {
        '12': '12px',
        '16': '16px'
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
     container: {
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
