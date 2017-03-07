/* eslint-disable import/default */
import chai from 'chai';
import appModulePath from 'app-module-path';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import env from '../../config/env';
import yenv from 'yenv';
// Basically makes us able to "import stuff from 'some/source/folder'"
appModulePath.addPath(__dirname + '/../..');

// Load in the "tests" environment variables
Object.assign(env, yenv('src/server/env.yaml', { env: 'tests' }));
chai.config.includeStack = true;
chai.use(sinonChai);
chai.should();
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
global.sinon = sinon;
