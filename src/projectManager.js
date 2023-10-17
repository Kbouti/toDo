import { makeTaskBar } from "./taskCards";
import { selectProject, updateProjectClasses } from "./domManipulator";
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
    delete(){
        //to delete this project and all tasks it contains. Cannot be performed on the default "misc" project.
        if (this.canDelete = true){
        }
    }
    clearContents(){
        //to remove all tasks from this project
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
                for (let task of contents){
                    if (task.name == this.name){
                        let index = contents.indexOf(task)
                        contents.splice(index, 0);
                    }
                }
        }
    }


// Open projectList

// Find relevant project

//open that project's contents

//find the relevant task

//remove that task
//update Project
//update ProjectList


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
        return;
    }
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



function findSelectedProject(projectList){
    for (const project of projectList){
        if(project.isSelected == true){
            return project.name;
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
