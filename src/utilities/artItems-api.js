import sendRequest from './sendRequest';

const BASE_URL = '/api/artItems';

export function getAll() {
    return sendRequest(BASE_URL);
}
// export function getOne() {
//     return
// }