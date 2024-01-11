export const fetdata = (endpoint, accesstoken) => {

    const headers = new Headers();
    const bearer = `Bearer ${accesstoken}`;
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(endpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}