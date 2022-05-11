import sendRequest from './send-request'

const BASE_URL = '/api/images'

export function getAll() {
    const images = sendRequest(BASE_URL)
    return images
}

export function getProjectImages(projectId) {
    return sendRequest(`${BASE_URL}/${projectId}`)
} 