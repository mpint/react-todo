import createServer from 'config/test/createServer';
import { throwAnyErrors } from 'config/test/test.helpers';

describe('Status API', ()=> {
  var request;
  before(async ()=> {
    request = await createServer();
  });
  describe('GET /api/status/ping', ()=> {
    it('returns a 200 if api is responding', (done)=> {
      request.get(`/api/status/ping`)
        .expect(200)
        .end(throwAnyErrors.bind(undefined, done));
    });
  });
});
