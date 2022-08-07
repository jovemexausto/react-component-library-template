// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  content: ['./src/**/*.jsx', './src/**/*.tsx'],
  darkMode: 'class',

  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        phone: { raw: '(max-width: 768px)' },
        desktop: { raw: '(min-width: 1024px)' },
        tablet: { raw: '(max-width: 1023px)' },
      },
    },
    colors: {
      ...colors,
      primary: {
        50: '#f8fbfe',
        100: '#f1f8fc',
        200: '#dcedf8',
        300: '#c7e2f4',
        400: '#9eccec',
        500: '#74b6e4',
        600: '#68a4cd',
        700: '#5789ab',
        800: '#466d89',
        900: '#395970',
      },
      secondary: {
        50: '#e6f1f8',
        100: '#cce2f0',
        200: '#99c5e2',
        300: '#66a9d3',
        400: '#338cc5',
        500: '#006fb6',
        600: '#005992',
        700: '#00436d',
        800: '#002c49',
        900: '#001624',
      },
    },
  },

  plugins: [],
}
