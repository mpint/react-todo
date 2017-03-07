import axios from 'axios';
import * as i from './interceptors';

const requester = axios.create();

requester.interceptors.request.use();

requester.interceptors.response.use();

export default requester;
