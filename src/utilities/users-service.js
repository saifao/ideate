import * as usersAPI from './users-api'

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData)
    //persist the token
    localStorage.setItem('token', token)
    return getUser();
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)
    return getUser();;
}

export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
}

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(window.atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
        // Token has expired - remove it from localStorage
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function logOut() {
    localStorage.removeItem('token');
}

export function checkToken() {
    // Just so you don't forget how to use .then
    // this return s a promise
    return usersAPI.checkToken().then(dateStr => new Date(dateStr))
    // checkToken returns a string but let's make it a date object for more flexibility
}
