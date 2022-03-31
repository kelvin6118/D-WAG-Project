// let id = localStorage.getItem('userID')

async function getUserInfo(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}

async function getDisplayName(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/username/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}

async function getHabits(){
    try{
        const response = await fetch(`http://localhost:3000/habits`)
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }

}

async function getActivity(id){
    try{
        const response = await fetch(`http://localhost:3000/activities/${id}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.warn(err);
    }
}

module.exports = { getUserInfo, getDisplayName, getHabits, getActivity }
