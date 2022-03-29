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


//*********************  calendar generator **************** */

  let nav = 0;
  let clicked = null;

  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  const header = document.createElement('div');
  header.setAttribute('id', 'header');

  const monthDisplay = document.createElement('div');
  monthDisplay.setAttribute('id', 'monthDisplay');

  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('id', 'buttonContainer');

  const backButton= document.createElement('Button');
  backButton.setAttribute('id', 'backButton');
  backButton.innerText = 'Back';

  const nextButton= document.createElement('Button');
  nextButton.setAttribute('id', 'nextButton');
  nextButton.innerText = 'Next';

  const weekDays= document.createElement('div');
  weekDays.setAttribute('id', 'weekdays');

  const calendar= document.createElement('div');
  calendar.setAttribute('id', 'calendar');

  const Sunday = document.createElement('div');
  Sunday.innerText = 'Sunday';
  const Monday = document.createElement('div');
  Monday.innerText = 'Monday';
  const Tuesday = document.createElement('div');
  Tuesday.innerText = 'Tuesday';
  const Wednesday = document.createElement('div');
  Wednesday.innerText = 'Wednesday';
  const Thursday = document.createElement('div');
  Thursday.innerText = 'Thursday';
  const Friday = document.createElement('div');
  Friday.innerText = 'Friday';
  const Saturday = document.createElement('div');
  Saturday.innerText = 'Saturday';

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function loadCalendar() {
    //create container
    container.innerHTML = '';

    container.appendChild(header);
    container.appendChild(weekDays);
    container.appendChild(calendar);

    header.appendChild(monthDisplay);
    header.appendChild(buttonContainer);

    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(nextButton);

    weekDays.appendChild(Sunday);
    weekDays.appendChild(Monday);
    weekDays.appendChild(Tuesday);
    weekDays.appendChild(Wednesday);
    weekDays.appendChild(Thursday);
    weekDays.appendChild(Friday);
    weekDays.appendChild(Saturday);


    const dt = new Date();

    if (nav !== 0){
      dt.setMonth(new Date().getMonth() + nav);
    }

    if (nav === -1){
        dt.setMonth(new Date().getMonth() - 1);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-GB', {
      weekday: "long",
      year: "numeric",
      month: 'numeric',
      day: 'numeric',
    });

    console.log(dateString)

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    monthDisplay.innerText = `${dt.toLocaleDateString('en-GB', { month: 'long'})} ${year}`

    calendar.innerHTML = '';

    for(let i = 1; i <= paddingDays + daysInMonth; i++){
      const daySquare = document.createElement('div');
      daySquare.classList.add('day');

      if(i > paddingDays){
        daySquare.innerText = i - paddingDays;
      }else{
        daySquare.classList.add('padding');
      }
      calendar.appendChild(daySquare)
    }
    main.appendChild(container);
  }

  function initButtons() {
    nextButton.addEventListener('click', () => {
      nav++
      loadCalendar();
    }
    );
    backButton.addEventListener('click', () => {
      nav--
      loadCalendar();
    }
    );
}

initButtons();

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

async function renderProfile(username){
    const profile = document.createElement('section');
    profile.id="profile"
    const greeting = document.createElement('h3');
    const userInfo = await getUserInfo(username);
    console.log(userInfo)
    greeting.textContent = `Good to see you ${userInfo.displayName}!`;
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
