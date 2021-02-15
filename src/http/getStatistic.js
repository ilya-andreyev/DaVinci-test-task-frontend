import http from './index';

export const getAllSprints = () => http.get('/api/allSprints');
export const getAllIssues = () => http.get('/api/allIssues');
