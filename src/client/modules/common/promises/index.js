import requester from '~/lib/requester';

export function getApiStatus() {
  return requester.get('/api/status/ping');
}
