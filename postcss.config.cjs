const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
  plugins: [
    require('autoprefixer')(),
    //
    // !dev && require('cssnano)')({
    //   preset: "default",
    // }),
  ],
};

module.exports = config;
