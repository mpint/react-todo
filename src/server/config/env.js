const path = require('path');
const config = require('yenv')('src/server/env.yaml');
const env = process.env.NODE_ENV;
const prod = env === 'production' || env === 'ci';
const tests = env === 'tests';
const dev = env === 'development' || !env;
// set verbose to true in dev
// otherwise, look for it in the environment
const verbose = dev ? true : !!process.env.verbose;
/**
 * An object with environment stuff.
 *
 * @type {Object}
 */
module.exports = Object.assign(
  {
    // is production?
    prod,
    // is testing environment?
    tests,
    // is development?
    dev,
    // node environment
    env,
    // toggle verbose logging
    // useful for testing
    // -> verbose=true npm run test:server
    verbose,
    // root path of production app files
    appRoot: path.join(__dirname, '../../dist'),
    projectRoot: path.join(__dirname, '../../..')
  },
  // Load environment variables from env.yaml
  config
);
