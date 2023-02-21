/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    colors: {
      brand: '#73aace',
      primaryAccent: '#d9480f',
      secondaryAccent: '#2b8a3e',
      background: '#ecf1f4',
      font: '#2d2d2d',
      white: '#ffffff',
      lightGray: '#7c7979',
      superLightGray: '#CCCCCC',
      lightPink: '#F7B3B3',
      lightYellow: '#FFF7B3',
      lightGreen: '#B3F7D1',
      lightPurple: '#D1B3F7',
    },
    extend: {
      rotate: {
        '17': '17deg',
      },
    },
  },
  plugins: [],
};
