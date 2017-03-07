import env from 'config/env';
import axios from 'axios';
import base from './index';
import {
  noopError, responseSuccessDebugger, responseErrorDebugger, retry202
} from './interceptors';

const morpheusRequester = axios.create();

morpheusRequester.interceptors.response
  .use(
    responseSuccessDebugger.bind(undefined, env.verbose ? 'verbose' : '!verbose'),
    responseErrorDebugger
  );

morpheusRequester.interceptors.response
  .use(
    retry202.bind(undefined, { instance: morpheusRequester, numRetries: 3 }),
    noopError
  );

export default morpheusRequester;
