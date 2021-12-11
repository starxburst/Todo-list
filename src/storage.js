import {todo_list, defaultTask} from './todo-list-factory';

function checkLocalStorage() {
    if(!localStorage.getItem("savedTodoList")) {
        defaultTask();
        populateStorage();
    } else {
        setStyles();
    }
}

function populateStorage() {
    localStorage.setItem("savedTodoList", JSON.stringify(todo_list));
    setStyles();
}

function setStyles() {
    todo_list = JSON.parse(localStorage.getItem("savedTodoList"));
}

checkLocalStorage();
console.log(localStorage.savedTodoList);

export {checkLocalStorage, populateStorage};