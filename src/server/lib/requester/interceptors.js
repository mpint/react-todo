
import logger from 'lib/Logger';
const log = logger.get();

export function noopSuccess(response) {
  return response;
}

export function noopError(err) {
  throw err;
}

export function requestSuccessDebugger(mode, request) {
  if (!mode) throw new Error('mode must be "verbose" or "!verbose"');

  log.requestSuccessDebugger('on', mode, request);

  return request;
}

export function responseSuccessDebugger(mode, response) {
  if (!mode) throw new Error('mode must be "verbose" or "!verbose"');

  log.responseSuccessDebugger('on', mode, response);

  return response;
}

export function responseErrorDebugger(error) {
  log.responseErrorDebugger('on', error.response);
  return Promise.reject(error);
}

function retryWrapper(options, retryFn) {
    return retryFn.bind(undefined, options);
}

export function retry409({ instance }, err) {
  // this will retry 409's once
  if (err.status === 409 && err.config && !err.config.__isRetryRequest) {
    err.config.__isRetryRequest = true;
    return instance.request(err.config);
  }

  throw err;
}

export function retry202({ instance, numRetries = 3, interval = 1000 }, res) {
  // this will retry 202's once per second
  if (!res.config.__totalNumRetries) {
    res.config.__totalNumRetries = numRetries;
    res.config.__retryCount = 0;
  }

  const { __retryCount, __totalNumRetries } = res.config;

  if (res.status === 202 && res.config && __retryCount < __totalNumRetries) {
    ++res.config.__retryCount;

    setTimeout(() => {
      instance.request(res.config);
    }, interval);

    throw res;
  }

  return res;
}
