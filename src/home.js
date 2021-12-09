import {updateDisplay, createHomeTodoList} from "./task-builder";

const btnHome = document.querySelector('#home');
btnHome.addEventListener('click', createHomePage);


function createHomePage() {
    const topbarTitle = document.getElementById('top-bar-title');
    topbarTitle.textContent = 'Home';
    updateDisplay();
    createHomeTodoList();
}

export default createHomePage;