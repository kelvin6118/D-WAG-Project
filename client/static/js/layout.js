// const nav = document.querySelector('nav');
const main = document.querySelector('main');


const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#feed', '#profile'];


function updateMain(path) {
    main.innerHTML = '';
    if (path) {
        switch(path){
            case '#login':
                renderLoginForm(); break;
            case '#register':
                renderRegisterForm(); break;
            /*case '#habit':
                renderHabit(); break;
            case '#profile':
                renderProfile(); break;
            case '#calendar':
                renderCalendar(); break;*/
            case '#dashboard':
                loadCalendar(); break;
            default:
                render404(); break;
        }
    } else {

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
