var assets  = require('postcss-assets');
const postcss = require('@stencil/postcss');
const autoprefixer = require('autoprefixer');

const options = {
  basePath: 'www/',
  loadPaths: ['assets/']
};

exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  serviceWorker: false,
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
        assets(options)
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
