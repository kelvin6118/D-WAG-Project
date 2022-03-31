// const nav = document.querySelector('nav');
let main = document.querySelector('main');


const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#feed', '#profile'];

window.addEventListener('hashchange', updateContent);



function updateMain(path) {
    id = localStorage.getItem('userID')
    console.log(id)
    main.innerHTML = '';
    main.appendChild(dashboard)
    if (path) {
        switch(path){
            case '#login':
                renderFullLogo(),
                renderLoginForm(); break;
            case '#register':
                renderFullLogo(),
                renderRegisterForm(); break;
            case '#dashboard':
                renderlogo(),
                renderProfile(id),
                renderLogout(),
                renderHabit(),
                trackedHabits(id),
                loadCalendar(id);
                break;
            default:
                render404(); break;
        }
    } else {
        renderFullLogo(),
        renderLoginForm();
        //renderHomepage();
    }
}


function updateContent(){
    const path = window.location.hash;
    if (privateRoutes.includes(path) && !currentUser()){
        window.location.hash = '#';
    } else {
        updateMain(path);
    }
}

updateContent();
