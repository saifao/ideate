import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}

/*--- Helper Functions ---*/





// // This is the base path of the Express route we'll define
// const BASE_URL = '/api/users';

// export async function signUp(userData) {
//     // Fetch uses an options object as a second arg to make requests
//     // other than basic GET requests, include data, headers, etc. 
//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // Fetch requires data payloads to be stringified
//         // and assigned to a body property on the options object
//         body: JSON.stringify(userData)
//     });
//     console.log(res);
//     if (res.ok) {
//         console.log("working here");
//         return res.json();
//     } else {
//         console.log("hitting error");
//         throw new Error('Invalid Sign Up');
//     }
// }

// export async function login(credentials) {
//     const res = await fetch(`${BASE_URL}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(credentials)
//     });

//     if (res.ok) {
//         return res.json();
//     } else {
//         throw new Error('Invalid Login');
//     }
// }