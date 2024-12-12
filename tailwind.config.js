/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ["Nunito", 'sans-serif'],
      'overpass': ["Yellowtail", 'serif'],
    },
    container: {
      // center: true,
      padding: {
        DEFAULT: '0px',
        sm: '0rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '0rem',
      },
    },
  },
  plugins: [],
}