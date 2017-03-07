const env = require('../config/env');
const appModulePath = require('app-module-path');

// Basically makes us able to "import stuff from 'some/source/folder'"
appModulePath.addPath(__dirname + '/../');

// We need the polyfill.
require('babel-polyfill');

// Sourcemaps are nice.
require('source-map-support/register');

// In dev-mode, we use babel-register.
// In prod-mode, the files have already been transpiled.

//TODO research babel-register in prod, it seems it is required
// if (env.dev) {
  require('babel-register');
// }
