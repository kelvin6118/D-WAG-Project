// const nav = document.querySelector('nav');
const main = document.querySelector('main');


const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#feed', '#profile'];

window.addEventListener('hashchange', updateContent);


function updateMain(path) {
    const username = localStorage.getItem('username')
    main.innerHTML = '';
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
                renderProfile(username),
                renderLogout(),
                renderHabit();
                // renderCalendar(); 
                break;
            default:
                render404(); break;
        }
    } else {
        renderFullLogo(),
        renderRegisterForm();
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
