import sendRequest from './sendRequest';

const BASE_URL = '/api/artItems';

export default function getAll() {
    return sendRequest(BASE_URL);
}