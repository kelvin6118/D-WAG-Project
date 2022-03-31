function renderRegisterForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'text', name: 'display_name', placeholder: 'Display name' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', register)
    main.appendChild(form);
  }

  function renderLoginForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]

const form = document.createElement('form');
form.id = 'loginForm'
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    let registerButton = document.createElement('button')
    registerButton.id = "registerButton"
    registerButton.innerText = "Register for an Account"
    form.addEventListener('submit', requestLogin)
    main.appendChild(form);
    main.appendChild(registerButton);
    registerButton.addEventListener('click', goToRegister)
}

function renderLogout(){
    const fields = [
        { tag: 'input', attributes: { type: 'submit', value: 'Logout' } }
    ]

const form = document.createElement('form');
form.id = 'logoutForm'
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', logout)
    main.appendChild(form);
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}
