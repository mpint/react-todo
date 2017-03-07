import path from 'path';
import Boom from 'boom';
import Router from 'koa-router';
import convert from 'koa-convert';
import serve from 'koa-static';
import send from 'koa-send';
import historyApiFallback from 'koa-connect-history-api-fallback';
import favicon from 'koa-favicon';
import env from 'config/env';
import createApis from './createApis';

/**
 * Resolves and creates API controllers.
 *
 * @param  {KoaRouter} router
 * The router to pass to the API factories.
 *
 * @param  {Object} container
 * The DI container.
 *
 * @return {Promise}
 * A promise for when we're done.
 */
export default async function createRoutes(app, container) {
  /**
   * @link https://github.com/alexmingoia/koa-router#nested-routers}
   */
  const rootRouter = new Router();
  const apiRouter = new Router();

  // configure koa to serve static assets in production
  if (env.prod) {

    // serve stuff from /dist folder

    // Changes the requested location to /index.html whenever there is a
    // request which fulfils the following criteria:
    // The request is a GET request
    // which accepts text/html
    // is not a direct file request, i.e. the requested path does not contain a . (DOT) character
    app.use(
      convert( historyApiFallback({ verbose: false }) )
    );

    app.use(
      serve(env.appRoot)
    );

    app.use(
      favicon(path.join(env.appRoot, 'favicon.ico'))
    );
  }

  // this creates /api routes (must be before the rootRouter routes)
  await createApis(apiRouter, rootRouter, container);

  app.use(
    rootRouter.routes()
  );

  app.use(
    rootRouter.allowedMethods({
      notImplemented: () => Boom.notImplemented(),
      methodNotAllowed: () => Boom.methodNotAllowed()
    })
  );

  // Default handler when nothing stopped the chain.
  app.use((ctx) =>
    ctx.notFound()
  );
}
