import Koa from 'koa';
import helmet from 'koa-helmet';
import convert from 'koa-convert';
// import stormpath from 'koa-stormpath';
import cors from 'kcors';
import env from 'config/env';
import responseCalls from '../middleware/responseCalls.middleware';
import createRoutes from './createRoutes';
import getConfiguredContainer from './createContainers';
import bodyParser from 'koa-bodyparser';
import logger from '../lib/Logger';

/**
 * Creates and returns a new Koa application.
 * Does *NOT* call `listen`!
 *
 * @return {Koa} The configured app.
 */
export default async function createServer() {
  const app = new Koa();
  app.name = 'Auth API';
  logger.get(app.name);

  app.use(helmet());
  app.use(responseCalls);
  app.use(convert(cors()));
  app.use(bodyParser());
  // app.use(convert(stormpath.init(app, { })));

  // Container is configured with our services and whatnot.
  const container = await getConfiguredContainer();

  await createRoutes(app, container);

  return app;
}
