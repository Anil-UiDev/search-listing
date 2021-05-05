const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const showUser = () => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(res => res)
}