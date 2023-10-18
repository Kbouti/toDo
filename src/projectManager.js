import { makeTaskBar } from "./taskCards";
import { selectProject, toggleProjectDisplays, updateProjectClasses } from "./domManipulator";
import { createElement } from "./elementMaker";

let projectList = [];
let currentProject;
let currentTask;


class Project {
    constructor(name, canDelete, isSelected, contents){
        this.name = name;
        this.canDelete = canDelete;
        this.isSelected = isSelected;
        this.contents = contents;
    }
    delete(projectList){
        //to delete this project and all tasks it contains. Cannot be performed on the default "misc" project.


console.log(`delete function called`);

        if (this.canDelete = true){
            //I'm a little confused why this works with single equal sign but not double.....

console.log(`confirmed canDelete`);
            for (let i = 0; i < projectList.length; i++){
                if (projectList[i].name == this.name){
                    let index = i;
                    projectList.splice(index, 1)

                    console.log(`beginning dom manipulation`);
            
                    let projectName = this.name;
                    let projectTaskContainer = document.getElementById(`${projectName}taskContainer`);
                    let taskContainer = document.getElementById(`taskContainer`);
                    taskContainer.removeChild(projectTaskContainer);
        
                    let projectContainer = document.getElementById(`projectContainer`);
                    let thisProject = document.getElementById(`${projectName}ProjectElement`);
                    projectContainer.removeChild(thisProject);

console.log(`Selecting Misc element`);

logSelectedProject(projectList);

console.log(`done.`);
   
                }
            }
        }
    }
}


class Task {
    constructor(project, name, description, urgency, status){
        this.project = project;
        this.name = name;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
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
    const newTask = new Task(projectDropDown.value, taskNameInput.value, taskDescriptionInput.value, urgencyDropDown.value, statusDropDown.value);
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
    const newProject = new Project(projectNameInput.value, false, true,  []);
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









// ********************************************************************************************************************
// this isn't working when called in projectDelete:

function findSelectedProject(projectList){
    for (const project of projectList){

        let isSelected = project.isSelected
        console.log(`project ${project.name} is selected: ${isSelected}`)
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
    logSelectedProject
}
