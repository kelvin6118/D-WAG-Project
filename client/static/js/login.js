const url = require('./url')

const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', login)

async function requestLogin(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(`${url}/users/login`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err); }
        login(data);
    } catch (err) {
        console.warn(err);
    }
}

function login(data) {
    localStorage.setItem('username', data.user);
    location.hash = `#dashboard`;
}

function logout() {
    localStorage.clear();
    location.hash = `#login`;
}



 

