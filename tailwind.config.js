/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    colors: {
      brand: '#087f5b',
      subBrand: '#0ca678',
      background: '#ecf1f4',
      font: '#2d2d2d',
      white: '#ffffff',
      lightGray: '#7c7979',
      superLightGray: '#ddd9d9',
    },
    extend: {
      rotate: {
        '17': '17deg',
      },
    },
  },
  plugins: [],
};
