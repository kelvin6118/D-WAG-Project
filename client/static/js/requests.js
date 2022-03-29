async function getUserInfo(username) {
    try {
        const response = await fetch(`http://localhost:3000/users/${username}`);
        const data = await response.json()
        return data
    } catch (err) {
        console.warn(err);
    }
}
