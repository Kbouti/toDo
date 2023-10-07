import { Project, Task, currentProject, currentTask, makeTask, pushTaskToProject, makeProject, pushProjectToProjectList, updateSelected } from "./projectManager";
import { makeTaskCard, makeTaskBar } from "./taskCards.js";


function newProjectElement(project){
    const newElement = document.createElement(`div`);
        newElement.classList.add(`project`);
        newElement.innerHTML = project.name;
        projectContainer = document.getElementById(`projectContainer`);
        projectContainer.appendChild(newElement);
    const projectDeleteButton = document.createElement(`div`);
        projectDeleteButton.classList.add(`projectDeleteButton`);
        projectDeleteButton.innerHTML = "X";
        newElement.appendChild(projectDeleteButton);
    return;
}


function toggleDisplay(id, standardDisplay){
    const element = document.getElementById(id);
    const elementDisplayValue = window.getComputedStyle(element).getPropertyValue(`display`);
    if(elementDisplayValue == standardDisplay){
        element.style.display = 'none'
        return;
    }
    element.style.display = standardDisplay;
    return;
}


function displayProjectForm(){
    const newProjectButton = document.getElementById(`newProjectButton`);
        newProjectButton.addEventListener(`click`, function(){
        toggleDisplay(`projectFormDiv`, `flex`)
        })
        return;
}





function toggleProjectDisplays(selectedName){
    const projectContainers = document.getElementsByClassName(`projectTaskList`);
    const containersArray = Array.from(projectContainers).map(div => div.id);

    let targetId = `${selectedName}taskContainer`

    for (let container of containersArray) {
        if (container == targetId){
            let selectedContainer = document.getElementById(container);
                selectedContainer.classList.remove(`hidden`)
            }

        else if (container !== targetId){
        let unselectedContainer = document.getElementById(container);
        unselectedContainer.classList.add(`hidden`);
        }
    }

return;
}






function displayTaskForm(projectList){
    const newTaskButton = document.getElementById(`newTaskButton`);
        newTaskButton.addEventListener(`click`, function(){
//populate dropdown menu with current projects:
        let option = ``;
        for(let i = 0; i < projectList.length; i++){
        option += `<option value=${projectList[i].name}>` + projectList[i].name+"</option>"
        }
        projectDropDown.innerHTML = option;
        toggleDisplay(`taskFormDiv`, `flex`)
        })
        return;
}

function cancelButtons(){
    const newProjectCancelButton = document.getElementById(`newProjectCancelButton`);
    newProjectCancelButton.addEventListener(`click`, function(){
        this.form.reset();
        toggleDisplay(`projectFormDiv`, `flex`);
    })
    const newTaskCancelButton = document.getElementById(`newTaskCancelButton`);
    newTaskCancelButton.addEventListener(`click`, function(){
        this.form.reset();
        toggleDisplay(`taskFormDiv`, `flex`);
    })
}




function addListenerToProjectSubmit(projectList){
    const projectForm = document.getElementById(`projectForm`);
    projectForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        //Prevent default

        let newProject = makeProject(projectList);
        currentProject = newProject.name;
        //Make new project

        pushProjectToProjectList(newProject);
        //Push project to projectList

        newProjectElement(newProject);
        //Creates the dom element for the new project

        projectForm.reset();
        //Resets the form

        console.log(`toggling project displays`);
        console.log(currentProject);
        toggleProjectDisplays(currentProject, projectList);
        console.log(`toggle complete`)

        toggleDisplay(`projectFormDiv`, `flex`);
        //Dissapears the form
    return;
    })
}











function addListenerToTaskSubmit(projectList){
    const taskForm = document.getElementById(`taskForm`);
    taskForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        //prevent default

        let newTask = makeTask();
        //Make new task
        pushTaskToProject(newTask);
        //Append new task to proper project in project list

        console.log(`new task's project is: ${newTask.project}`);
        let selectedProject = newTask.project;

        updateSelected(selectedProject, projectList);


        makeTaskBar(newTask, projectList)
        //Creates Dom element

        taskForm.reset();
        //Reset form

        toggleDisplay(`taskFormDiv`, `flex`);
        //Make form dissappear
        return;
    })

}

export {
    toggleDisplay,
    displayProjectForm,
    displayTaskForm,
    cancelButtons,
    addListenerToTaskSubmit,
    addListenerToProjectSubmit,
    toggleProjectDisplays
}




 
