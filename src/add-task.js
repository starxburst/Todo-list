import {todo_list, todoListFactory} from './todo-list-factory';
import {populateStorage} from './storage';
import {createProjectTodoList, createHomeTodoList, updateDisplay} from './task-builder';
import {projectList, createProjectSidebar} from './project';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

const plusBtn = document.getElementById('plus-icon-container');
plusBtn.addEventListener('click', createTask);

function createTask() {    
    const addTaskContainer = document.getElementById('add-task-container');
    const addTaskBackground = document.getElementById('add-task-background');
    const addTask = document.getElementById('add-task');
    const titleContainer = document.createElement('input');
    const descriptionContainer = document.createElement('textarea');
    const dueDateContainer = document.createElement('input');
    const projectListContainer = document.createElement('input');
    const projectDataList = document.createElement('datalist');
    const btnContainer = document.createElement('div');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    titleContainer.setAttribute('type', 'text');
    titleContainer.setAttribute('placeholder', 'Title');
    titleContainer.setAttribute('id', 'title-container');

    descriptionContainer.setAttribute('placeholder', 'Description');
    descriptionContainer.setAttribute('id', 'description-container');

    dueDateContainer.setAttribute('type', 'date');
    dueDateContainer.setAttribute('id', 'due-date-container');

    projectListContainer.setAttribute('list', 'browsers');
    projectListContainer.setAttribute('id', 'project-list-container');
    projectListContainer.setAttribute('placeholder', 'Choose a project from below');

    projectDataList.setAttribute('id', 'browsers');
    /* ---------- Create Project dropdown list ---------- */
    for (let i = 0; i < projectList.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', projectList[i]);
        projectDataList.appendChild(option);        
    }
    console.log(format(new Date(2014, 1, 11), 'MM/dd/yyyy'));
    /* -------------------------------------------------- */

    console.log(projectList);
    btnContainer.setAttribute('id', 'btn-container');

    addBtn.textContent = 'Add';
    addBtn.setAttribute('id', 'add-button');
    addBtn.setAttribute('type', 'button');
    addBtn.addEventListener('click', submitTask);

    cancelBtn.textContent = 'Cancel';
    cancelBtn.setAttribute('id', 'cancel-button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.addEventListener('click', closeAddTask);


    console.log(projectList);
    addTaskContainer.classList.remove('hidden');
    addTaskBackground.classList.remove('hidden');
    addTask.classList.remove('hidden');

    btnContainer.appendChild(addBtn);
    btnContainer.appendChild(cancelBtn);

    addTask.appendChild(titleContainer);
    addTask.appendChild(descriptionContainer);
    addTask.appendChild(dueDateContainer);
    addTask.appendChild(projectListContainer);
    addTask.appendChild(projectDataList);
    addTask.appendChild(btnContainer);
}

function closeAddTask() {
    const addTaskContainer = document.getElementById('add-task-container');
    const addTaskBackground = document.getElementById('add-task-background');
    const addTask = document.getElementById('add-task');

    addTaskContainer.classList.add('hidden');
    addTaskBackground.classList.add('hidden');
    addTask.classList.add('hidden');

    addTask.innerHTML = '';
}

function submitTask(e) {
    const title = document.getElementById('title-container').value;
    const description = document.getElementById('description-container').value;
    const preDueDate = document.getElementById('due-date-container').value;
    const dueDate = format(parse(preDueDate, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy')
    const project = document.getElementById('project-list-container').value;
    const completion = false;
    const newTodo = todoListFactory(title, description, dueDate, completion, project);
    todo_list.push(newTodo);
    populateStorage();
    reloadPage();
}

function reloadPage() {
    createProjectSidebar();
    let id = document.getElementById('top-bar-title').textContent;
    updateDisplay();
    if (id == 'Home') {
        createHomeTodoList();
    } else {
        createProjectTodoList(id);
    }
}

export default createTask;