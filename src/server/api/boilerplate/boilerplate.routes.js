import * as api from './boilerplate.api';
// The default export is the registration function.
// It gets passed the router, and the container
// which is used to bind the router calls so the container is
// injected into each method. You can use classes here if
// that's what floats your boat.
export default function (router, { bind }) {
  // router is a KoaRouter.
  router
    .get(
      '/boilerplate',
      // bind comes from the container
      bind(api.getStuff)
    )
    .post(
      '/boilerplate',
      bind(api.postStuff)
    );
}
