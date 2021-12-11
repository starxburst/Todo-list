import {todo_list} from './todo-list-factory';
import {updateDisplay, createProjectTodoList} from "./task-builder";

let projectList = [];

function createProjectSidebar() {
    for (let i = 0; i < todo_list.length; i++) {
        const projectContainer = document.getElementById('project-container');
        const li = document.createElement('li');
        if (document.getElementById(todo_list[i].project) == null) {
            li.textContent = todo_list[i].project;
            projectList.push(todo_list[i].project);
            li.setAttribute('id', todo_list[i].project);
            li.classList.add('project-li');
            li.addEventListener('click', createProjectPage);
            projectContainer.appendChild(li);
        }
    }
}

function createProjectPage(e) {
    const topbarTitle = document.getElementById('top-bar-title');
    let id = e.target.getAttribute('id')
    topbarTitle.textContent = id;
    updateDisplay();
    createProjectTodoList(id)
}

export {projectList, createProjectSidebar};