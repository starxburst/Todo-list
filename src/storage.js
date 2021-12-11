import {todo_list} from './todo-list-factory';

function checkLocalStorage() {
    if(!localStorage.getItem("savedTodoList")) {
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