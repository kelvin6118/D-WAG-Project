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

function renderHabit(){
    
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
      habit.type = 'radio';
      habit.id = `habit`+ `${userInfo[i].habits.id}`;
      habit.name = 'habit' + `${userInfo[i].habits.id}`;
    habit.value = `${userInfo[i].habits.habitName}`;
    habitLabel.for = 'habit' + `${userInfo[i].habits.id}`;
    habitLabel.innerText = `${userInfo[i].habits.habitName}`;

    main.appendChild(trackingSection)
    trackingSection.appendChild(habitForm);
    habitForm.appendChild(title);
    habitForm.appendChild(habit);
    habitForm.appendChild(habitLabel);
    }


}
