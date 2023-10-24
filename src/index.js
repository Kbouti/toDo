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





// Upon page load, check if local storage exists. If so, get local storage. 
if(checkLocalStorage()){
    let retrievedProjectList = getLocalStorage()
    console.log(`Local storage has been found and projectList retrieved. retrieved list is: ${retrievedProjectList}`)


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

// Create Misc project Dom element and append to projectContainer
const miscProject = createElement([`MiscProjectElement`, `projectElement`, `clickable`], `div`, `Misc`);
    miscProject.addEventListener(`click`, function(){
        selectProject(miscProject, retrievedProjectList);
    })
let projectContainer = document.getElementById(`projectContainer`);
    projectContainer.appendChild(miscProject);

// Create Misc project task container and append to task container:
let MisctaskContainer = createElement([`MisctaskContainer`, `projectTaskList`], `div`, ``);
let taskContainer = document.getElementById(`taskContainer`);
    taskContainer.appendChild(MisctaskContainer)




// Loop through each project and add the ability to delete that project
for (let i = 0; i < retrievedProjectList.length; i++){
        retrievedProjectList[i].delete = function(projectList){
            if (this.canDelete = true){
                //I'm a little confused why this works with single equal sign but not double.....
                for (let i = 0; i < projectList.length; i++){
                    if (projectList[i].name == this.name){
                        let index = i;
                        projectList.splice(index, 1)
                        let projectName = this.name;
                        let projectTaskContainer = document.getElementById(`${projectName}taskContainer`);
                        let taskContainer = document.getElementById(`taskContainer`);
                            taskContainer.removeChild(projectTaskContainer);
                        let projectContainer = document.getElementById(`projectContainer`);
                        let thisProject = document.getElementById(`${projectName}ProjectElement`);
                            projectContainer.removeChild(thisProject);
                    }
                }
            }
        }
    }










// looping through project list again to find misc project, then making task bars for each task in Misc project
for (let i = 0; i < retrievedProjectList.length; i++){
    console.log(retrievedProjectList[i].name)
    if(retrievedProjectList[i].name == `Misc`){
        console.log(`found Misc project`);
        let MiscContents = retrievedProjectList[i].contents;
        console.log(MiscContents);
        for (let f = 0; f < MiscContents.length; f++){
            console.log(`making taskbar`)
            makeTaskBar(MiscContents[f], retrievedProjectList);


            // While we've accessed the task, we'll add the delete method
            MiscContents[f].delete = function(retrievedProjectList){
                console.log(`Deleting task: ${this.name} from project: ${this.project}`);
                for(let project of retrievedProjectList){
                    if (project.name == this.project){
                        let contents = project.contents;
                        for(let i = 0; i < contents.length; i++){
                            if (contents[i].name == this.name){
                                let index = i;
                                contents.splice(index, 1);
                            }
                        }
                    }
                }
            }



        }
    }
}        








// for every project that isn't Misc: create project element and task container
for (let i = 1; i<retrievedProjectList.length;i++){
    let project = retrievedProjectList[i];
    let projectName = project.name;
    console.log(project.name)


    //create project element
    console.log(`creating project element`);

    newProjectElement(project, retrievedProjectList);
    let projectElement = document.getElementById(`${projectName}ProjectElement`)
        projectElement.addEventListener(`click`, function(){
            selectProject(projectElement, retrievedProjectList);
        })
    
    // create project Task container
    console.log(`creating project task container`)
    let projectTaskContainer = createElement([`${projectName}taskContainer`, `projectTaskList`], `div`, ``);
    let taskContainer = document.getElementById(`taskContainer`);
        taskContainer.appendChild(projectTaskContainer);

}




// We now need to create task elements for non-misc project tasks, and add delete function
// looping through all non-Misc projects:
for (let i = 1; i< retrievedProjectList.length; i++){
    let project = retrievedProjectList[i];
    let projectContents = project.contents;
    // Looping through the tasks of each project:
    for (let f = 0; f<projectContents.length; f++){
        let task = projectContents[f];


//Make taskbar
        makeTaskBar(task, retrievedProjectList);


// add delete function
        console.log(`adding delete function to ${task.name}`);
        task.delete = function(){
            for(let project of retrievedProjectList){
                if (project.name == this.project){
                    let contents = project.contents;
                    for(let i = 0; i < contents.length; i++){
                        if (contents[i].name == this.name){
                            let index = i;
                            contents.splice(index, 1);
                        }
                    }
                }
            }
        }
    }
}





updateProjectClasses(retrievedProjectList);
    console.log(`updated project classes`)



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




// installed lint extension