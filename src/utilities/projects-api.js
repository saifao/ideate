import sendRequest from './send-request';

const BASE_URL = '/api/projects';

export function getAll() {
    // return sendRequest(BASE_URL)
    const projects = sendRequest(BASE_URL)
    return projects
}

export function create(newProject) {
    return sendRequest(`${BASE_URL}/create`, 'POST', { newProject })
}