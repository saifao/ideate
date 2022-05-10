import sendRequest from './send-request'

const BASE_URL = '/api/images'

export default function getAll() {
    const images = sendRequest(BASE_URL)
    return images
}