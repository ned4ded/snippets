const path = require('path');

module.exports = {
  server: {
    serveFolder: './www',
    host: '192.168.1.130',
    port: 3001,
  },
  paths: {
    stylesAll: path.join(__dirname, 'src/styles/**/*.scss'),
    stylesBase: path.join(__dirname, 'src/styles/base.scss'),
    scripts: path.join(__dirname, 'src/scripts/**/*.js'),
  }
};
