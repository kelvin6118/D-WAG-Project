const url = require('./url')

const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', login)

async function login(e) {
    e.preventDefault();
    try {
        const response = await fetch(`${url}/users/${username}`);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err)
        } else {
            window.location.hash = `#users/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}
 

