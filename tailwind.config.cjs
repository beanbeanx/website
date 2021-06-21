module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#ee5b5b',
      },
    },
  },
  plugins: [],
};
