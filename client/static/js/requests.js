let id = window.localStorage.getItem('userID');

async function getUserInfo() {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
