
import {
  usefulRequestProps
} from 'lib/api.helpers';

export default async function noop(ctx, next) {
  await next();
}
