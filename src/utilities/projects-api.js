import sendRequest from './send-request';

const BASE_URL = '/api/projects';

export function getAll() {
    return sendRequest(BASE_URL)
}