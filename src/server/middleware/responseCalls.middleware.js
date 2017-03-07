import Boom from 'boom';
import { values } from 'lodash';
/**
 * HTTP 200 with the given content.
 *
 * @param  {Any} content The content to put in `body`.
 */
function ok(content = {}) {
  this.status = 200;
  this.body = content;
}

/**
 * Sets the status to the given code and returns a JSON
 * body with the given message. Used by other calls.
 *
 * @param  {String|Error} message or Boom error
 * The message or Boom error to return
 *
 * @param  {Number} code
 * The HTTP status code
 */
 function error(error, code = 500) {
   if (error instanceof Error) {
     const { output, message } = error;
     const { statusCode } = output;
     this.status = statusCode;
     this.body = { message };
   } else {
     this.status = code;
     this.body = { error };
   }
 }

/**
 * Adds some nice response calls to our context.
 * Boom docs: https://github.com/hapijs/boom
 *
 * @param {Koa.context} ctx
 * The Koa context.
 *
 * @param {Function} next
 * The middleware to call next.
 */
export default async function responseCalls(ctx, next) {
  ctx.ok = ok.bind(ctx);
  ctx.error = error.bind(ctx);
  ctx.badRequest = error.bind(ctx, Boom.badRequest());
  ctx.badData = error.bind(ctx, Boom.badData());
  ctx.unauthorized = error.bind(ctx, Boom.unauthorized());
  ctx.forbidden = error.bind(ctx, Boom.forbidden());
  ctx.notFound = error.bind(ctx, Boom.notFound());
  ctx.internalError = error.bind(ctx, Boom.badImplementation());
  ctx.serverUnavailable = error.bind(ctx, Boom.serverUnavailable());
  await next();
}
