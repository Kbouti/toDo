// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.
console.log(`index.js loaded`);


// In order to push changes to live site on github pages, run the following command:
// git subtree push --prefix dist origin gh-pages




import './style.css';
import {buildPage} from './homepage';

import {
    taskForm,
    projectForm
} from './forms';

import {
    toggleDisplay,
    displayProjectForm,
    displayTaskForm,
    cancelButtons,
    addListenerToTaskSubmit,
    addListenerToProjectSubmit,
    selectProject
} from './domManipulator';

import {
    projectList,
    Project,
    Task,
    createMiscProject,
    tempTasks,
    saveToLocalStorage,
    checkLocalStorage,
    getLocalStorage
} from './projectManager';






if(checkLocalStorage()){
    let retrievedProjectList = getLocalStorage()
    console.log(`Local storage has been found and projectList retrieved. retrieved list is: ${retrievedProjectList}`)
}
// At this point we are checking to see if there is an existing project list, and if there is, we retrieve it and log it. 
// The next step is to build dom elements based on the retrieved projectList.







buildPage();
    console.log(`buildPage has run`);

taskForm();
    console.log(`taskForm has run`);

projectForm();
    console.log(`projectForm has run`);

displayProjectForm(),
    console.log(`display ProjectForm has run`);

displayTaskForm(projectList),
    console.log(`display TaskForm has run`);

cancelButtons(),
    console.log(`cancelButtons has run`);

createMiscProject(projectList);
    console.log(`Misc Project created`);

tempTasks(projectList);
    console.log(`temp taskBar loaded`);

addListenerToTaskSubmit(projectList);
    console.log(`Listener added to new task submit`);

addListenerToProjectSubmit(projectList);
    console.log(`Listener added to new project submit`);


console.log(`PAGE LOAD COMPLETE`)







