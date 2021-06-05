module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    mode: 'all',
    content: ['./public/index.html', './src/**/*.svelte'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#ee5b5b'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
