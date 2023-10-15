import { saveInSessionStorage } from './SaveInSessionStorage';

export async function SignInRequest(email: string, password: string) {
    const url = '';
    return fetch(url, {
        method: 'POST',
        headers: {
            'accept': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    .then(response => saveInSessionStorage(response));
}