import env from 'config/env';
import axios from 'axios';
import { requestSuccessDebugger, noopError, responseSuccessDebugger, responseErrorDebugger } from './interceptors';
const request = axios.create();

request.interceptors.request
  .use(
    requestSuccessDebugger.bind(undefined, env.verbose ? 'verbose' : '!verbose'),
    noopError
  );

request.interceptors.response
  .use(
    responseSuccessDebugger.bind(undefined, env.verbose ? 'verbose' : '!verbose'),
    responseErrorDebugger
  );

export default request;
