import http from './index';

export const getAllSprints = () => http.get('/api/allSprints');
export const getAllIssues = () => http.get('/api/allIssues');
export const getVelocity = (id) => http.get('/api/statistic/velocity/sprint', { params: { id } });
export const getLeadTime = (id) => http.get('/api/statistic/leadTime/issue', { params: { id } });
export const getStabilizationRatio = (id) => http.get('/api/statistic/stabilizationRatio/issue', { params: { id } });
export const getProductivity = (id) => http.get('/api/statistic/productivity/issue', { params: { id } });
export const getAllIssuesLeadTime = () => http.get('/api/statistic/leadTime/allIssues');
export const getAllSprintsVelocity = () => http.get('/api/statistic/velocity/allSprints');
