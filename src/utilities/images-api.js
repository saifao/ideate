import sendRequest from './send-request'

const BASE_URL = '/api/images'

export function getAll() {
    return sendRequest(BASE_URL)
}

export function getProjectImages(projectId) {
    return sendRequest(`${BASE_URL}/${projectId}`)
}

export function handleAddProject(imageId, projectId) {
    return sendRequest(`${BASE_URL}/addProject`, 'PUT', { imageId, projectId })
}

export function removeProject(activeImageId) {
    return sendRequest(`${BASE_URL}/removeProject`, 'PUT', { activeImageId })
}

export function saveImage(imageUrl) {
    return sendRequest(`${BASE_URL}/create`, 'POST', { imageUrl })
}