let url = "https://d-wag-habit.herokuapp.com"

async function requestLogin(e) {
    console.log(e)
    e.preventDefault();
    try {
        const messageData = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        
        const options =  {
            method: 'POST', 
            body: JSON.stringify(messageData),
            headers: { "Content-Type": "application/json"}
        };
        console.log(options.body)
        const r = await fetch(`${url}/users/login`, options)
        const data = await r.json()
        console.log(data)
        if (data.err){ throw Error(data.err); }
        login(data);
    } catch (err) {
        console.warn(err);
    }
}

function login(data) {
    localStorage.setItem('username', data.user);
    localStorage.setItem('userID', data.userID)
    location.hash = `#dashboard`;
}

function logout() {
    localStorage.clear();
    location.hash = `#login`;
}

function goToRegister() {
    localStorage.clear();
    location.hash = `#register`;
}

function goToLogin() {
    localStorage.clear();
    location.hash = `#login`;
}


 

