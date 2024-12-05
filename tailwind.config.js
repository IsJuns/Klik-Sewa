/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}" // memastikan semua file sumber yang sesuai dicakup 
  ],

  theme: {
    extend: {
      colors: {
        primary: '#0B6275',
        secondary: '#599191',
        tertiary: '#F3713B',
        quaternary: '#ffffff',

      }
    },
  },

  variants: {
    extends: {},
  },
  plugins: [],
}

