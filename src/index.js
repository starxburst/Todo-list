import {testFactory} from './todo-list-factory';
import {checkLocalStorage, populateStorage} from './storage';
import createHomePage from './home';
import {createProjectSidebar} from './project';
import {createTask} from './add-task';

checkLocalStorage();
createHomePage();
createProjectSidebar();