// const nav = document.querySelector('nav');
const main = document.querySelector('main');


const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#feed', '#profile'];

window.addEventListener('hashchange', updateContent);


async function updateMain(path) {

    id = window.localStorage.getItem("userID");

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
                renderProfile(),
                renderLogout(),
                renderHabit(),
                loadCalendar();
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
