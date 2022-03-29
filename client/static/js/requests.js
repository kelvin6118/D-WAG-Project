async function getUserInfo(username) {
    try {
        const response = await fetch(`http://localhost:3000/users/${username}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
