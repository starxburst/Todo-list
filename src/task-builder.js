import {todo_list} from './todo-list-factory';

function updateDisplay() {
    const taskContainer = document.querySelector('#task-container');
    taskContainer.innerHTML = '';
}

function createTaskCard(title, dueDate, completion, id) {
    const taskCardContainer = document.createElement('div');
    const checkboxContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const titleDiv = document.createElement('div');
    const dueDateDiv = document.createElement('div');

    
    checkbox.setAttribute('type', 'checkbox');
      
    if (completion == true) {
        checkbox.checked = true;
        titleDiv.classList.add('completed');
        dueDateDiv.classList.add('completed');
    } else {
        checkbox.checked = false;
    }

    checkbox.addEventListener('change', updateCompletion);

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.classList.add('checkbox-container');

    titleDiv.textContent = title;
    dueDateDiv.textContent = dueDate;

    titleDiv.classList.add('title-div');
    dueDateDiv.classList.add('due-date-div');
    checkboxContainer.classList.add('checkbox-container');
    checkbox.classList.add('checkbox');

    checkbox.setAttribute('id', id);
    titleDiv.setAttribute('id', `title${id}`);
    dueDateDiv.setAttribute('id', `dueDate${id}`);

    taskCardContainer.classList.add('task-card-container');
    taskCardContainer.append(checkboxContainer);
    taskCardContainer.append(titleDiv);
    taskCardContainer.append(dueDateDiv);

    return taskCardContainer;
}

function updateCompletion(e) {
    let id = e.target.getAttribute('id');
    const titleDiv = document.getElementById(`title${id}`);
    const dueDateDiv = document.getElementById(`dueDate${id}`);

    if (e.target.checked) {
        console.log("Checkbox is checked..");
        todo_list[id].completion = true;
        console.log(todo_list[id].completion);
        titleDiv.classList.add('completed');
        dueDateDiv.classList.add('completed');
    } else {
        console.log("Checkbox is not checked..");
        todo_list[id].completion = false;
        console.log(todo_list[id].completion);
        titleDiv.classList.remove('completed');
        dueDateDiv.classList.remove('completed');
    }
}

function createHomeTodoList() {
    for (let i = 0; i < todo_list.length; i++) {
        let taskCardContainer = createTaskCard(todo_list[i].title, todo_list[i].dueDate, todo_list[i].completion, i);
        const taskContainer = document.getElementById('task-container');
        taskContainer.appendChild(taskCardContainer);
    }
}

function createProjectTodoList(id) {
    updateDisplay();
    for (let i = 0; i < todo_list.length; i++) {
        if(todo_list[i].project == id) {
            let taskCardContainer = createTaskCard(todo_list[i].title, todo_list[i].dueDate, todo_list[i].completion, i);
            const taskContainer = document.getElementById('task-container');
            taskContainer.appendChild(taskCardContainer);
            console.log(id);
        }
    }
}

export {updateDisplay, createHomeTodoList, createProjectTodoList};