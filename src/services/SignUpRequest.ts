import { saveInSessionStorage } from './SaveInSessionStorage';

export async function SignUpRequest(firstName: string, lastName: string, email: string, password: string) {
    const url = '';
    return fetch(url, {
        method: 'POST',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
    })
    .then(response => saveInSessionStorage(response));
}