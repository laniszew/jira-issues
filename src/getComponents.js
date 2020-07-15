import request from 'request-promise';
import { GET_PROJECT_COMPONENTS_API_URL } from './consts.js';

export default () => request.get({ url: GET_PROJECT_COMPONENTS_API_URL('IC'), json: true });