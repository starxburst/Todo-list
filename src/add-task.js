import {todo_list} from './todo-list-factory';

const plusBtn = document.getElementById('plus-icon-container');
plusBtn.addEventListener('click', createTask);

function createTask() {
    const addTaskContainer = document.getElementById('add-task-container');
    const titleContainer = document.createElement('div');
    const titleInput = document.createElement('input');
    addTaskContainer.classList.remove('hidden');


}

export default createTask;