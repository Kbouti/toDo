import { makeTaskBar } from "./taskCards";
import { selectProject, toggleProjectDisplays, updateProjectClasses } from "./domManipulator";
import { createElement } from "./elementMaker";

let projectList = [];





// I'm trying to save ProjectList in local storage so when the page loads I can load the user's tasks and projects. 

// ProjectList is an array of objects. Each object represents a project, which is a folder that can contain many tasks. 
// Local storage only handles strings. So My struggle seems to be to stringify each object (which in itself contains objects), then stringify the entire array, then translate that back into the array of objects format I'll need to rebuild the page. 


function saveToLocalStorage(projectList){
    // save projectList to local storage
    // We want this to run every time we edit projectList
console.log(`save to local storage activated`);

console.log(`clearing existing storage`)
localStorage.clear();
//clearing local storage so I don't somehow end up with duplicate projects on there. I think I might have been getting that in the last attempt

let stringified = stringifyArray(projectList);

localStorage.setItem(`projectList`, stringified);

}

function stringifyArray(array){
console.log(`stringify function activated`);
    let arrayOfStrings = []
    for (let i = 0; i<array.length; i++){
        let stringProject = JSON.stringify(array[i]);
        arrayOfStrings.push(stringProject);
    }
let stringifiedArray = JSON.stringify(arrayOfStrings);
return stringifiedArray;
}



function checkLocalStorage(){
    console.log(`checking for local storage`);
        if (localStorage.length == 0){
            console.log(`local Storage not found`);
            return false
        }
        else {
            console.log(`local storage found`);
            return true
        }
}



function getLocalStorage(){
    console.log(`get local storage activated`);
    let rawStorageValue = localStorage.getItem(`projectList`);
    let parsedRaw = JSON.parse(rawStorageValue);
    let formattedProjectList = [];
    for (let i = 0; i < parsedRaw.length;i++){
        let parsed = JSON.parse(parsedRaw[i]);
        formattedProjectList.push(parsed);
    }
    // console.log(`formatted projectList: ${formattedProjectList}`);
    return formattedProjectList;
}











class Project {
    constructor(name, canDelete, isSelected, contents){
        this.name = name;
        this.canDelete = canDelete;
        this.isSelected = isSelected;
        this.contents = contents;
    }
    delete(projectList){
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


class Task {
    constructor(project, name, description, urgency, status, dueDate){
        this.project = project;
        this.name = name;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
        this.dueDate = dueDate;
    }
    log(){
        console.log(this);
    }

    delete(){
        console.log(`Deleting task: ${this.name} from project: ${this.project}`);
        for(let project of projectList){
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

function createMiscProject(projectList){
    let project1 = new Project(`Misc`, false, true, []);
    const miscProject = createElement([`MiscProjectElement`, `projectElement`, `clickable`], `div`, `Misc`);
        miscProject.addEventListener(`click`, function(){
            selectProject(miscProject, projectList);
        })
    projectContainer = document.getElementById(`projectContainer`);
        projectContainer.appendChild(miscProject);
    pushProjectToProjectList(project1);
    createTaskContainer(project1);
    return;
}


function makeTask(){
    const projectDropDown = document.getElementById(`projectDropDown`);
    const taskNameInput = document.getElementById(`taskNameInput`);
    const taskDescriptionInput = document.getElementById(`taskDescriptionInput`);
    const urgencyDropDown = document.getElementById(`urgencyDropDown`);
    const statusDropDown = document.getElementById(`statusDropDown`);
    const dueDateInput = document.getElementById(`dueDateInput`);
    const newTask = new Task(projectDropDown.value, taskNameInput.value, taskDescriptionInput.value, urgencyDropDown.value, statusDropDown.value, dueDateInput.value);
    return newTask;
}

function pushTaskToProject(newTask){
    for (let i = 0; i < projectList.length;i++){
        if ( projectList[i].name == newTask.project){
                projectList[i].contents.push(newTask);
        }
    }
    return;
}

function pushProjectToProjectList(project){
    projectList.push(project);
    updateProjectClasses(projectList);
}

function makeProject(){
    const projectNameInput = document.getElementById(`projectNameInput`);
    const newProject = new Project(projectNameInput.value, true, true,  []);
    createTaskContainer(newProject);
    return newProject;
}

function updateSelectedProject(selectedProject, projectList){
    for(let project of projectList){
        if (selectedProject == project.name){
            project.isSelected = true;
        }
        else if (selectedProject !== project.name){
            project.isSelected = false;
        }
    }
}



function findSelectedProject(projectList){
    for (const project of projectList){
        let isSelected = project.isSelected
        if(isSelected == true){
            let selected = project.name;
            return selected;
    }
}
}

function logSelectedProject(projectList){
    const selected = findSelectedProject(projectList);
    console.log(`The selected project is: ${selected}`);
    return;
}

function createTaskContainer(project){
    let newElement = createElement([`${project.name}taskContainer`, `projectTaskList`], `div`, ``)
    let taskContainer = document.getElementById(`taskContainer`);
        taskContainer.appendChild(newElement)
    return
}

function tempTasks(projectList){
    const tempTask = new Task(`Misc`, `Example task`, `All the task notes you could ever want!`, `Low`, `Not Started`)
        pushTaskToProject(tempTask);
        makeTaskBar(tempTask, projectList);
    return;
}



export {
    projectList,
    Project,
    Task,
    makeTask,
    pushTaskToProject,
    makeProject,
    pushProjectToProjectList,
    createMiscProject,
    tempTasks,
    updateSelectedProject,
    findSelectedProject,
    logSelectedProject,
    saveToLocalStorage,
    checkLocalStorage,
    getLocalStorage
}
