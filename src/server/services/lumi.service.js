import qs from 'qs';
import u from 'url';
import p from 'path';
import basic from 'lib/requester';
import env from 'config/env';
import { authHeaders, getData, getHits, isResponse } from 'lib/api.helpers';
import { defaultsDeep, get, isObject } from 'lodash';
import logger from 'lib/Logger';

const log = logger.get();

export function request({}, userToken, endpoint, headers, data, requester = basic) {
  /**
   * make some http headers
   * @param  {string|object} headers   if string, must be an <authHeaderString>
   *                                   defined in api.helpers/authHeaders.
   *                                   if object, will be extended with an optional
   *                                   authHeader: <authHeaderString> property
   * @param  {string} userToken user token
   * @return {object}           http headers
   */
  function makeHeaders(headers, userToken) {
    if (!headers) return {};

    if (isObject(headers)) {
      const { authHeader, ...others } = headers;

      return {
        ...(
          authHeader ?
          authHeaders({ userToken, appToken: env.appToken }, authHeader) :
          {}
        ),
        ...others
      };
    } else {
      return authHeaders({ userToken, appToken: env.appToken }, headers);
    }
  }

  /**
   * do a bunch of stuff that generates a complete endpoint
   * @param  {string|object} type    api endpoint data
   * @param  {object} payload query or other stuff
   * @return {object}         endpoint path and method
   */
  function makeEndpoint(options, payload) {
    var _index, params, querystring;
    if (isObject(options)) {
      var { path, index, query, params } = options;
    } else {
      var path = options;
    }

    // try to get the remote
    // endpoint from configuration
    const endpoint = get(env, path);

    if (!endpoint) throw new Error(`bad endpoint: ${path}`);

    // get the endpoint root
    const [ endpointRootString ] = path.split('.');
    // get the endpoint root for utility
    const endpointRoot = get(env, endpointRootString);

    // try to find database indexes at the endpoint root
    const indexes = endpointRoot.indexes;

    // if es index for CRUD operation is supplied,
    // get it from the indexes
    if (indexes && index) {
      _index = indexes[index];
    }

    // construct the complete endpoint path
    const rootPath = u.parse(env.base[`${endpointRootString}`]);

    rootPath.pathname = p.join(endpointRoot.p, rootPath.path, endpoint.p, params || '', _index || '');
    // construct the complete url
    const completeUrl =  u.format(rootPath);

    // construct the querystring if its supplied
    if (query) {
      querystring = query instanceof Object ?
        `${qs.stringify(query)}` : query;
    }

    return {
      // tack on the querystring if its supplied
      url: query ? `${completeUrl}?${querystring}` : completeUrl,
      method: endpoint.m
    };
  }

  const { url, method } = makeEndpoint(endpoint, data);
  headers = makeHeaders(headers, userToken);

  return requester.request({
     url,
     method,
     headers,
     ...(data ? { data } : {})
   })
   .then((res)=> {
     // this is an outlet
     // for console logging errors
     // in development - do not remove
     return res;
   })
   .then(getData)
   .then(getHits)
   .catch((err) => {
     // {} argument necessary for DI,
     // see handleError function signature
     throw handleError({}, err);
   });
}

/**
 * parse response from handleSearchRequest
 * @param  {[type]} {}                   container
 * @param  {array} elasticSearchDocList results
 * @return {array}                      abridged document list
 */
export function transformRequest({}, elasticSearchDocList = []) {
  if (!Array.isArray(elasticSearchDocList)) {
    elasticSearchDocList = [ elasticSearchDocList ];
  }

  return elasticSearchDocList.map((doc) => {
    return defaultsDeep(doc.document_data, {
      id: doc.name,
      created: doc.created_at,
      modified: doc.modified_at
    });
  });
}

/**
 * handle an async error in catch blocks
 * @param  {error|response|'force'} err  error   can be an error object, http response, or 'force'
 *                                        handleError('force', 'forbidden', ctx) // sends ctx.forbidden();
 * @param  {string} errorType valid error type defined in responseCalls.middleware
 *                            the response will contain this error
 * @param  {object} ctx   koa context, if passed, will send response to client
 * @return {error}           error object
 */
export function handleError({}, err, errorType, ctx) {
  if (!err) { throw new Error(); }
  if (ctx && !ctx instanceof Object) throw new Error('ctx must be Koa context');
  if (errorType && !ctx) throw new Error('ctx and errorType must be supplied together');

  if (isResponse(err)) {
    !err.logged && log.logError(err);

    err.logged = true;
    if (ctx) {
      const { status } = err.response;
      if (status) {
        ctx.error(undefined, status);
      } else {
        ctx[errorType]();
      }
    } else {
      throw err;
    }
  } else if (err === 'force') {
    if (ctx) {
      if (!ctx[errorType]) throw new Error('bad errorType');
      ctx[errorType]();
    } else {
      throw err;
    }
  } else {
    !err.logged && log.logError(err);
    // if context is provided, send 500 and throw error
    if (ctx) {
        ctx.internalError();
        var error = new Error(err.message);
        error.logged = true;

        throw error;
    } else {
      throw err;
    }
  }
}

export default function (container) {
  container.register({
    lumi: container.bindAll({
      request,
      transformRequest,
      handleError
    })
  });
}
