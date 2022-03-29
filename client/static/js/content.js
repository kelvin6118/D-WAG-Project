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
  // let habbits =



  function loadCalendar() {
    //create container


    const calendar = document.getElementById('calendar')
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dt = new Date();
    //  console.log(dt)
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

// console.log(firstDayOfMonth)
        console.log(weekdays)
        console.log(dateString)

    const paddingDays = weekdays.indexOf(dateString.split(', ')[1]);

    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-gb', { month: 'long'})} ${year}`

    calendar.innerHTML = '';

    for(let i = 1 ; i <= paddingDays + daysInMonth; i++){
      const daySquare = document.createElement('div');
      daySquare.classList.add('day');

      if(i > paddingDays){
        daySquare.innerText = i - paddingDays;
      }else{
        daySquare.classList.add('padding');
      }
      calendar.appendChild(daySquare)

    }
  }

  function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
      nav++
      loadCalendar();
    }
    );
    document.getElementById('backButton').addEventListener('click', () => {
      nav--
      loadCalendar();
    }
    );

  }
  initButtons();
  loadCalendar();



  function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}

  function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}
