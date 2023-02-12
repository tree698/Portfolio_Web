/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        brand: '#0c90e4',
        background: '#ecf1f4',
        font: '#475258',
        white: '#ffffff',
        lightGray: '#7c7979',
        superLightGray: '#ddd9d9',
      },
    },
  },
  plugins: [],
};
