import { sendRequest } from './send-request';

const BASE_URL = '/api/articles';

export function getAll() {
    return sendRequest(BASE_URL);
}

// This function is never actually used, it's
// only provided here to remind you to follow RESTful routing, etc.
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}