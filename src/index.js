// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.
console.log(`index.js loaded`);


// In order to push changes to live site on github pages, run the following command:
// git subtree push --prefix dist origin gh-pages




import './style.css';
import {buildPage} from './homepage';
import { createElement } from './elementMaker';
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
    selectProject,
    newProjectElement,
    updateProjectClasses
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
import { makeTaskBar } from './taskCards';






if(checkLocalStorage()){
    let retrievedProjectList = getLocalStorage()
    console.log(`Local storage has been found and projectList retrieved. retrieved list is: ${retrievedProjectList}`)
// At this point we are checking to see if there is an existing project list, and if there is, we retrieve it and log it. 
// The next step is to build dom elements based on the retrieved projectList.


console.log(`building page with retrieved projectList`);

buildPage();
    console.log(`buildPage has run`);

taskForm();
    console.log(`taskForm has run`);

projectForm();
    console.log(`projectForm has run`);

displayProjectForm(),
    console.log(`display ProjectForm has run`);

displayTaskForm(retrievedProjectList),
    console.log(`display TaskForm has run`);

cancelButtons(),
    console.log(`cancelButtons has run`);





// Create Misc project Dom element (This can't be deleted by user)
const miscProject = createElement([`MiscProjectElement`, `projectElement`, `clickable`], `div`, `Misc`);
miscProject.addEventListener(`click`, function(){
    selectProject(miscProject, retrievedProjectList);
})
projectContainer = document.getElementById(`projectContainer`);
projectContainer.appendChild(miscProject);

// Create Misc project task container:
let MisctaskContainer = createElement([`MisctaskContainer`, `projectTaskList`], `div`, ``);
let taskContainer = document.getElementById(`taskContainer`);
    taskContainer.appendChild(MisctaskContainer)

//Next we'll need to search through our retrieved projectList and see if there are any tasks in the Misc project, then create dom elements for them. 


for (let i = 0; i < retrievedProjectList.length; i++){

    console.log(retrievedProjectList[i].name)
    if(retrievedProjectList[i].name == `Misc`){
        console.log(`found Misc project`);
        let MiscContents = retrievedProjectList[i].contents;
        console.log(MiscContents);
        for (let f = 0; f < MiscContents.length; f++){
            console.log(`making taskbar`)
            makeTaskBar(MiscContents[f], retrievedProjectList);
        }
    }


}


// for every project that isn't Misc:
for (let i = 1; i<retrievedProjectList.length;i++){

    let project = retrievedProjectList[i];
    // Get project Object

    newProjectElement(project, retrievedProjectList);
        console.log(`created a project element`);
    let projectElement = document.getElementById(`${project.name}ProjectElement`)
    //Create project element
        projectElement.addEventListener(`click`, function(){

            console.log(`select project event listener added to that project element`)
            selectProject(projectElement, retrievedProjectList);
        })

    let projectName = project.name;

    let projectTaskContainer = createElement([`${projectName}taskContainer`, `projectTaskList`], `div`, ``);
    let taskContainer = document.getElementById(`taskContainer`);
        taskContainer.appendChild(projectTaskContainer);



// ******************************************************************************************
// It seems like it isn't updating the saved project list when tasks are added to a reloaded page. 
// The tasks that are created under the first page load live on, but nothing made after that
// *********************************************************************************************************




    let projectContents = project.contents;

    console.log(`projectContents: ${projectContents}`)

    for (let f = 0; f<projectContents.length;f++){
        let task = projectContents[f];
        console.log(`making taskbar for ${task.name}`);
        makeTaskBar(task, retrievedProjectList)
    }


updateProjectClasses(retrievedProjectList);


}





addListenerToTaskSubmit(retrievedProjectList);
    console.log(`Listener added to new task submit`);

addListenerToProjectSubmit(retrievedProjectList);
    console.log(`Listener added to new project submit`);


console.log(`RETRIEVED LIST PAGE LOAD COMPLETE`)



}
else {




console.log(`No local Storage found, building new page.`)


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


console.log(`FRESH PAGE LOAD COMPLETE`)
}


