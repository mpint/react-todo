import glob from 'glob';
import path from 'path';
import { listModules } from 'awilix';

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

export default async function createApis(apiRouter, rootRouter, container) {
  const result = await listModules('../api/**/*.routes.js', { cwd: __dirname });

  result.forEach(
    m => require(m.path).default(apiRouter, container)
  );

  rootRouter.use('/api', apiRouter.routes());
}
