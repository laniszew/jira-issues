import buildUrl from './buildUrl.js';

export const BASE_URL = "https://herocoders.atlassian.net/rest/api/3";

export const GET_PROJECT_COMPONENTS_API_URL = (projetName) => buildUrl(BASE_URL, ['project', projetName, 'components']);

export const GET_PROJECT_ISSUES_API_URL = (projectName, ...params) => buildUrl(BASE_URL, 'search', { jql: projectName, ...params });

export const MAX_ISSUES = 50;