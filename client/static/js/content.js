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
    main.innerHTML = '';

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
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-gb', {
      weekday: "long",
      year: "numeric",
      month: 'numeric',
      day: 'numeric',
    });

    console.log(dateString)

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    monthDisplay.innerText = `${dt.toLocaleDateString('en-us', { month: 'long'})} ${year}`

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

  function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}

  function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}
