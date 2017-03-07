import { agent } from 'supertest';
import http from 'http';
import createServer from '../../config/createServer';

export default async () => {
  return agent(
    http.createServer(
      (await createServer()).callback()
    )
  );
};

async function fetchAuthInfo(request, validCredentials) {
  return await request.post('/api/auth/login')
    .send(validCredentials)
    .then(function(res) {
      const { token } = res.body.response;
      const authHeader = getAuthHeader(
        validCredentials.username, token
      );

      printAuthHeader(authHeader);

      return { authHeader, token };
    });
}
