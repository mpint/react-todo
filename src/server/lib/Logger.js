/* eslint-disable no-console */
import bunyan from 'bunyan';
import env from 'config/env';
import { isResponse } from 'lib/api.helpers';
import { isEmpty, isString, isError, isPlainObject } from 'lodash';
import colors from 'colors';
/**
 * Bunyan logger singleton
 * TODO: refactor this into a service to be injected into container
 * @return {object}    logger API
 */
const Logger = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init(name, config = {}) {
    if (!name) throw new Error('the name of the logger must be supplied');

    const defaults = {
      // {@link https://www.npmjs.com/package/bunyan#serializers}
      serializers: bunyan.stdSerializers,
      // in production, log all the things
      level: 'debug',
      environment: 'development'
    };

    const logger = bunyan.createLogger({ name, ...defaults, ...config });

    return {
      ...logger,
      logError: errorLogger.bind(logger, env),
      requestSuccessDebugger: requestSuccessDebugger.bind(logger, env),
      responseSuccessDebugger: responseSuccessDebugger.bind(logger, env),
      responseErrorDebugger: responseErrorDebugger.bind(logger, env)
    };
  }

  function printResponseDetails(response) {
    if (!response) throw console.log(new Error());

    if (isString(response.errno) && response.errno.includes('ECONNREFUSED')) {
      console.log(response.message.red.bold.dim, '\n');
    } else {
      const { config, status, statusText } = response;

      if (!config) return;

      const { headers, url, method } = config;

      const spacedHeaders = Object.entries(headers).map((item)=> item.join(' '));
      const message = [`${method.toUpperCase()} ${url}`, `${status} ${statusText}`, ...spacedHeaders].join('\n');

      return response.status.toString().startsWith('2') ?
        console.log(message.green.bold.dim, '\n') :
        console.log(message.red.bold.dim, '\n');
    }
  }

  /**
   * this function is curried, env is passed in automatically
   */
  function errorLogger(env, err) {
    // if (env.prod) {
    //   if (isResponse(err)) {
    //     instance.error({ res: err });
    //   } else {
    //     instance.error({ err });
    //   }
    // } else {
      if (isResponse(err)) {
        env.verbose && printResponseDetails(err.response);
      } else {
        console.error(err.message.red.bold.dim);
        console.error(err.stack);
      }
    // }
  }

  function requestSuccessDebugger(env, onSwitch, verbose, req) {
    if (!env.verbose || onSwitch !== 'on') return req;
    const { data } = req;
    if (verbose === 'verbose') {
      if (isPlainObject(data)) {
        console.log(
          JSON.stringify(data, null, 2).yellow.dim
        );
      } else if (isString(data)) {
        try {
          console.log(
            JSON.stringify(JSON.parse(data), null, 2).yellow.dim
          );
        } catch (e) {
          console.log(data.yellow.dim);
        }
      }
    }

    return req;
  }

  function responseSuccessDebugger(env, onSwitch, verbose, res) {
    if (!env.verbose || onSwitch !== 'on') return res;

    printResponseDetails(res);

    if (verbose === 'verbose') {
      if (isPlainObject(res.data)) {
        console.log(
          JSON.stringify(res.data, null, 2).cyan.dim
        );
      }
    }

    return res;
  }

  function responseErrorDebugger(env, onSwitch, err) {
    if (!env.verbose || onSwitch !== 'on') return err;

    printResponseDetails(err);

    return err;
  }

  return {
    /**
     * get the logger singleton
     * @param  {string} name   required
     * @param  {object} config Bunyan configuration
     * @see {@link https://github.com/trentm/node-bunyan}
     * @return {object}        Bunyan instance
     */
    get: (name, config)=> {
      if (!instance) {
        instance = init(name, config);
      }

      return instance;
    }
  };
})();

export default Logger;
