  let nav = 0;
  let clicked = null;
  id = localStorage.getItem('userID')

  const trackingSection = document.createElement('section');
  trackingSection.id = "trackingContainer"

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


async function loadCalendar(id) {
    //create container
    let userInfo = await getUserInfo(id);
    console.log("load Calendar " , userInfo);

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

        let date  = i - paddingDays;
        let month = dt.toLocaleDateString('en-GB', { month: 'numeric'});
        let daySquareDate = `${date}/${month}/${year}`;

        let marker = document.createElement('span');

        userInfo.forEach(obj => {
          let eventDate = obj["tracker"].date;
          let habit = obj["habits"].id;
          // console.log(eventDate)
          if(eventDate == daySquareDate){
            switch(habit){
              case 1:
                marker.classList.add("water");
                daySquare.appendChild(marker);
                console.log('found event Drink Water')
                  break;
              case 2:
                marker.classList.add("sleep");
                daySquare.appendChild(marker);
                console.log('found event sleep')
                  break;

              case 3:
                marker.classList.add("read");
                daySquare.appendChild(marker);
                console.log('found event read')
                  break;
              case 4:
                marker.classList.add("steps");
                daySquare.appendChild(marker);
                console.log('found event steps')
                  break;
              default:
                console.log('no event found');
            }
          }
        })


        //marker = create element circle
        //marker.classList('water');
        //daySquare.appendChild(marker)

      }else{
        daySquare.classList.add('padding');
      }
      calendar.appendChild(daySquare)
    }
    main.appendChild(container);
  }

  function DateCalculator(start, end){
    var date1 = new Date(start);
    var date2 = new Date(end);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
  }


  // ********** future features function for streak [ CODE NOT IN USE YET ]************
  function streakCounter(userInfo){
    userInfo.reverse();
    let start = "";
    let end = "";
    let counter = 0;
    let activityCount = 0;
    let streak = 0;


    userInfo.forEach(obj => {
      let eventDate = obj["tracker"].date;
      let frequency = obj["activity"].frequency;

      if(start === ""){
        start = eventDate;
      }else{
        end = eventDate;
        let dayDiff = DateCalculator(start, end);

        if((counter + dayDiff) > 7){
          activityCount = 0;
          counter = counter - 7 + dayDiff;

          if(activityCount > frequency){
            streak ++;
          }else{
            streak = 0;
          }

          start = end;

        }else{
          activityCount++;
          counter += dayDiff;
          start = end;
        }
      }
    })

  }


function initButtons(id) {
    nextButton.addEventListener('click', () => {
      nav++
      loadCalendar(id);
    }
    );
    backButton.addEventListener('click', () => {
      nav--
      loadCalendar(id);
    }
    );
}

initButtons(id);



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

async function trackedHabits(id) {
  trackingSection.innerHTML = ""
  const activityInfo = await getActivity(id)
    const habitForm = document.createElement('form');
    const title = document.createElement('h3');
    title.textContent = `Habits you're tracking`;
    const submit = document.createElement('input')
    submit.type = 'submit';
    console.log(activityInfo)

    for(let i = 0; i < activityInfo.length; i++){
      const habit = document.createElement('input');
      const habitLabel = document.createElement('label');
      habit.type = 'checkbox';
      habit.classList.add("habitBox");
      habit.id = `habit`+ `${activityInfo[i].habitID}`;
      habit.name = 'habit' + `${activityInfo[i].habitID}`;
    habit.value = `${activityInfo[i].habitID}`;
    habitLabel.for = 'habit' + `${activityInfo[i].habitID}`;
    habitLabel.innerText = `${activityInfo[i].habitName}`;

    habitForm.appendChild(habitLabel);
    habitForm.appendChild(habit);
    habitForm.appendChild(submit);
    }

    main.appendChild(trackingSection)
    trackingSection.appendChild(title);
    trackingSection.appendChild(habitForm);
    habitForm.addEventListener('submit', trackHabits)


}
