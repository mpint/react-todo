import * as api from './status.api';

export default function (router, { bind }) {
  router
    .get('/status/ping', bind(api.ping))
}
