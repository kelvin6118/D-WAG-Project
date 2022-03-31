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


async function renderProfile(id){
    const profile = document.createElement('section');
    profile.id="profile"
    const greeting = document.createElement('h3');
    const userInfo = await getUserInfo(id);
    console.log(userInfo)
    greeting.textContent = `Good to see you ${userInfo[0].userInfo.displayName}!`;
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

async function renderHabit(){
    const getHabitList = await getHabits();
    const habitSection = document.createElement('section')
    const selectForm = document.createElement('form');
    const dropdown = document.createElement('select');
    const habitTitle = document.createElement('label');
    const numberInput = document.createElement('input');
    const frequencyInput = document.createElement('input');
    const submit = document.createElement('input');
    const text = document.createElement('p');
    submit.type = 'submit';
    numberInput.type = 'text';
    numberInput.name = 'numberInput'
    frequencyInput.type = 'text';
    frequencyInput.name = 'frequencyInput'
    dropdown.name = "habits";
    dropdown.id = "habits";
    habitTitle.for = "habits";
    habitTitle.innerText = "Track a new habit:";
    main.appendChild(habitSection);
    habitSection.appendChild(habitTitle);
    habitSection.appendChild(selectForm)
    selectForm.appendChild(dropdown);
    selectForm.appendChild(text);
    text.innerText = "Please select a habit to add from the dropdown menu"
    selectForm.appendChild(numberInput);
    let habitOption;
    let selectedValue;
    
    for(let i = 0; i < getHabitList.length; i++){
      habitOption = document.createElement('option');
      habitOption.id = `${getHabitList[i].id}`
      habitOption.value = `${getHabitList[i].id}`
      habitOption.innerText = `${getHabitList[i].habit_name}`;
      dropdown.appendChild(habitOption);
    }

    function getSelectedValue() {
      selectedValue = document.getElementById("habits").value;
      console.log(selectedValue)
      
      if (selectedValue == `${getHabitList[0].id}`){
      text.innerText = "";
       text.innerText = `Choose how many glasses of water you want to drink`
     } else if (selectedValue == `${getHabitList[1].id}`){
      text.innerText = "";
       text.innerText = `Choose how many hours of sleep you want to get nightly`
     } else if (selectedValue == `${getHabitList[2].id}`){
      text.innerText = "";
       text.innerText = `Choose how many minutes of reading you want to do each day`
     } else {
      text.innerText = "";
       text.innerText = `Choose how many steps you want to do each day`
     }
    }
    
    dropdown.addEventListener("change", getSelectedValue)
    const frequencyText = document.createElement('p');
    frequencyText.innerText = `How often would you like to track this a week?`

    selectForm.appendChild(frequencyText)
    selectForm.appendChild(frequencyInput)
    selectForm.appendChild(submit)
    selectForm.addEventListener('submit', newHabits)
}

  function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}



async function trackedHabits(username) {

    const userInfo = await getUserInfo(username)
    console.log(userInfo)
    const trackingSection = document.createElement('section');
    const habitForm = document.createElement('form');
    const title = document.createElement('h3');
    title.textContent = `Habits you're tracking`;
    const submit = document.createElement('input')
    submit.type = 'submit';
    
    for(let i = 0; i < userInfo.length; i++){
      const habit = document.createElement('input');
      const habitLabel = document.createElement('label');
      habit.type = 'checkbox';
      habit.classList.add("habitBox");
      habit.id = `habit`+ `${userInfo[i].habits.id}`;
      habit.name = 'habit' + `${userInfo[i].habits.id}`;
    habit.value = `${userInfo[i].habits.id}`;
    habitLabel.for = 'habit' + `${userInfo[i].habits.id}`;
    habitLabel.innerText = `${userInfo[i].habits.habitName}`;

    main.appendChild(trackingSection)
    trackingSection.appendChild(title);
    trackingSection.appendChild(habitForm);
    habitForm.appendChild(habitLabel);
    habitForm.appendChild(habit);
    habitForm.appendChild(submit);
    }

    habitForm.addEventListener('submit', trackHabits)


}
