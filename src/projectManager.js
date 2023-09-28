let projectList = [];
let currentProject;
let currentTask;


class Project {
    constructor(name, canDelete, contents){
        this.name = name;
        this.canDelete = canDelete;
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
}

function createMiscProject(){
    let project1 = new Project(`Misc`, `no`, []);
    projectList.push(project1);
    const miscProject = document.createElement(`div`);
    miscProject.classList.add(`project`);
    miscProject.innerHTML = `Misc`;
    projectContainer = document.getElementById(`projectContainer`);
    projectContainer.appendChild(miscProject);
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
        if ( projectList[i].name == projectDropDown.value){
                projectList[i].contents.push(newTask);
        }
    }
    return;
}






export {
    projectList,
    Project,
    Task,
    makeTask,
    pushTaskToProject,
    createMiscProject
}
