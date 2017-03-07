import env from 'config/env';
import {
  validatePayload,
  usefulRequestProps
} from 'lib/api.helpers';

// An API method.
export async function getStuff({ boilerplate }, ctx) {
  // Dependencies are passed in with an object as the first parameter.
  const data = await boilerplate.getStuff('What is the universe?');
  // .ok comes from responseCalls.js middleware.
  return ctx.ok({ data });
}

// Another API method
export function postStuff({}, ctx) {
  // echo back stuff to prove bodyparser works.
  return ctx.ok({ youSaid: ctx.request.body });
}
