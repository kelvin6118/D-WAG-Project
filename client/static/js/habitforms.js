url = "https://localhost:3000"

async function newHabits(e) {
    console.log(e)
    e.preventDefault();
    try {
        const newHabits = {
            userID: window.localStorage.getItem('userID'),
            habitID: e.target[0].value,
            number: e.target.numberInput.value,
            frequency: e.target.frequencyInput.value
        }
        
        const options =  {
            method: 'POST', 
            body: JSON.stringify(newHabits),
            headers: { "Content-Type": "application/json"}
        };
        console.log(options.body)
        const r = await fetch(`${url}/activities`, options)
        const data = await r.json()
        console.log(data)
        trackedHabits(id)
        if (data.err){ throw Error(data.err); }
    } catch (err) {
        console.warn(err);
    }
}

async function trackHabits(e) {
    console.log(e)
    e.preventDefault();
    let date = new Date().getDate();
    let month = new Date().toLocaleDateString('en-GB', { month: 'numeric'});;
    let year = new Date().getFullYear();
    usedDate = date + '/' + month + '/' + year
    try {
        const habitTracked = {
            userID: window.localStorage.getItem('userID'),
            habitID: [],
            date: usedDate
        }
        
        let checkedBox = document.querySelectorAll(".habitBox")
        for (i = 0; i < checkedBox.length; i++) {
            if (checkedBox[i].checked === true) {
                console.log(checkedBox[i].value)
                habitTracked.habitID.push(parseInt(checkedBox[i].value))
            }
        }

        const options =  {
            method: 'POST', 
            body: JSON.stringify(habitTracked),
            headers: { "Content-Type": "application/json"}
        };
        console.log(options.body)
        const r = await fetch(`${url}/trackers`, options)
        const data = await r.json()
        console.log(data)
        loadCalendar(id)
        if (data.err){ throw Error(data.err); }
    } catch (err) {
        console.warn(err);
    }
}
