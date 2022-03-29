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
    form.addEventListener('submit', requestLogin)
    main.appendChild(form);
}

function renderProfile(){
    const profile = document.createElement('section');
    const greeting = document.createElement('h3');
    greeting.textContent = `Good to see you, ${localStorage.getItem('username')}!`;
    profile.appendChild(greeting);
    main.appendChild(profile);
}

function renderlogo(){
    const logo = document.createElement('img');
    logo.src = `./static/resources/Habitrack logo.png`;
    logo.width = "300";
    logo.height = "300";
    main.appendChild(logo);
}

function renderFullLogo(){
    const fullLogo = document.createElement('img');
    fullLogo.src = `./static/resources/Habitrack full.png`;
    fullLogo.width = "300";
    fullLogo.height = "300";
    main.appendChild(fullLogo);
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

function renderHabit(){
    const habitSection = document.createElement('section');
    const title = document.createElement('h3');
    title.textContent = `Habits you're tracking`
    const habitList = document.createElement('ul');
    const habit1 = document.createElement('li');
    habit1.textContent = `Hit daily step count`;
    const habit2 = document.createElement('li');
    habit2.textContent = `Drink 3 glasses of water`;
    const habit3 = document.createElement('li');
    habit3.textContent = `Read for 30 minutes`;
    const dropdown = document.createElement('select');
    const habitTitle = document.createElement('label');
    const dailySteps = document.createElement('option');
    const waterDrank = document.createElement('option');
    const bookRead = document.createElement('option');
    dropdown.name = "habits";
    dropdown.id = "habits";
    habitTitle.for = "habits";
    habitTitle.innerText = "Track a new habit:";
    dailySteps.value = "DailySteps";
    dailySteps.innerText = "Daily Steps";
    waterDrank.value = "WaterDrank";
    waterDrank.innerText = "Water Drank";
    bookRead.value = "BookRead";
    bookRead.innerText = "Book Read";

    main.appendChild(habitSection);
    habitSection.appendChild(title);
    habitSection.appendChild(habitList);
    habitList.appendChild(habit1);
    habitList.appendChild(habit2);
    habitList.appendChild(habit3);
    habitSection.appendChild(habitTitle);
    habitSection.appendChild(dropdown);
    dropdown.appendChild(dailySteps);
    dropdown.appendChild(waterDrank);
    dropdown.appendChild(bookRead);

}


  function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}

  function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}
