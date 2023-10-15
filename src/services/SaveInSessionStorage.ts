export async function saveInSessionStorage(response: Response) {
    const responsJson = await response.json();
    sessionStorage.setItem("sessionToken", responsJson.token);
}