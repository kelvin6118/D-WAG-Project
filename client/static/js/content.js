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


  let nav = 0;
  let clicked = null;
  // let habbits =

  const calender = document.getElementById('calendar')
  const weekdays = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function loadCalender() {
    //create container
    const dt = new Date();
    //  console.log(dt)
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

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    for(let i = 1; i <= paddingDays + daysInMonth; i++){
      const daySquare = document.createElement('div');
      daySquare.classList.add('day');

      if(i > paddingDays){
        daySquare.innerText = i - paddingDays;
      }else{
        daySquare.classList.add('padding');
      }
      calender.appendChild(daySquare)

    }

  }

  loadCalender()

  function renderCalendar(){

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
