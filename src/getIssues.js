import request from 'request-promise';
import { GET_PROJECT_ISSUES_API_URL, MAX_ISSUES } from './consts.js';

export default async () => {
    let allIssues = [];
    let startAt = 0;
    let total = 0;

    do {
        const response = await request.get({ url: GET_PROJECT_ISSUES_API_URL('project = IC', { maxResults:MAX_ISSUES, startAt }), json: true });
        allIssues = [...allIssues, ...response.issues];

        total = response.total;
        startAt += MAX_ISSUES;
    } while (startAt < total);

    return allIssues;
}