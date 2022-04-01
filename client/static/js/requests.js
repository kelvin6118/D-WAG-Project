// let id = localStorage.getItem('userID')
url = "https://localhost:3000"

async function getUserInfo(id) {
    try {
        const response = await fetch(`${url}/users/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}

async function getDisplayName(id) {
    try {
        const response = await fetch(`${url}/users/username/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}

async function getHabits(){
    try{
        const response = await fetch(`${url}/habits`)
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }

}

async function getActivity(id){
    try{
        const response = await fetch(`${url}/activities/${id}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.warn(err);
    }
}
