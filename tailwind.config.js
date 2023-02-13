/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    colors: {
      brand: '#2b8a3e',
      accent: '#d9480f',
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
