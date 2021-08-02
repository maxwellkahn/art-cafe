// import { getToken } from './users-service'
import sendRequest from './sendRequest';
const BASE_URL = '/api/users'

export function signUp(userData) {
    console.log(userData)
    return sendRequest(BASE_URL, 'POST', userData);
}

 export function login(credentials) {
     return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
 }

 export function checkToken() {
     return sendRequest(`${BASE_URL}/check-token`);
 }

