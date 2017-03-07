import createServer from 'config/test/createServer';
import { throwAnyErrors } from 'config/test/test.helpers';

describe('awesome API', ()=> {
  let request;
  before(async ()=> {
    request = await createServer();
  });

  describe('GET /api/boilerplate', ()=> {
    it('returns the answer', (done)=> {
      request.get('/api/boilerplate')
        .expect(200)
        .expect((res)=> {
          res.body.should.deep.equal({
            data: 'What is the universe? The answer is 42.'
          });
        })
        .end(throwAnyErrors.bind(undefined, done));
    });
  });

  describe('POST /api/boilerplate', ()=> {
    it('returns whatever was POSTed', (done)=> {
      request.post('/api/boilerplate')
        .send({ hello: 'world' })
        .expect(200)
        .expect((res)=> {
          res.body.should.deep.equal({
            youSaid: {
              hello: 'world'
            }
          });
        })
        .end(throwAnyErrors.bind(undefined, done));
    });
  });
});
