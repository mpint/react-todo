import colors from 'colors';

/**
 * set request headers of various request types
 * @param  {object} userToken     snowflakeapi userToken
 * @param  {object} appToken      app token
 * @param  {string} type     request type
 * @return {object}          request headers
 */
export function authHeaders({ userToken, appToken }, type) {
  switch(type) {
    default:
      return {};
  }
}

/**
 * a bunch of useful request properties
 * that you can destructure
 *
 * @param  {object} ctx Koa context
 * @return {object}     exposed request props
 */
export function usefulRequestProps(ctx) {
  var userToken;
  // get the whole request
  const { request, params } = ctx;
  // get any files on the request
  const { files, file } = ctx.req;
  // get the request body
  const { body } = { ...ctx.request, ...ctx.req };
  // get url params

  if (ctx.state && ctx.state.user) {
    userToken = ctx.state.user.userToken;
  }

  return { request, body, files, file, params, userToken };
}

/**
 * determine whether an object is a Node Response
 * @param  {object}  obj test object
 * @return {boolean}     is object a node response?
 */
export function isResponse(obj = {}) {
  return !!(obj.request && obj.headers) ||
    !!(obj.config && obj.response);
}
/**
 * validate the payload of a request object
 *
 * if validatePayload returns true,
 * we return an error, so we return false if payload is good
 *
 * @param  {object} requestBody
 * @param  {array|string} requiredParameters
 * @return {boolean}  true if payload is invalid, false if its good
 */
// TODO: can we add Joi to the validation?
export function validatePayload(requestBody, requiredParameters = []) {
  requiredParameters = Array.isArray(requiredParameters) ?
    requiredParameters :
    Array.of(requiredParameters);

  return !requiredParameters.every(param => requestBody[param]);
}
