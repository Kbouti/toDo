import {
    Project,
    Task,
    currentProject,
    currentTask,
    makeTask,
    pushTaskToProject,
    makeProject,
    pushProjectToProjectList,
    updateSelectedProject,
    logSelectedProject,
    findSelectedProject,
    projectList
}
from "./projectManager";

import { makeTaskCard, makeTaskBar } from "./taskCards.js";


function newProjectElement(project, projectList){

    const newElement = document.createElement(`div`);
        newElement.classList.add(`projectElement`);

        newElement.setAttribute(`id`, `${project.name}ProjectElement`)
        newElement.innerHTML = project.name;
        projectContainer = document.getElementById(`projectContainer`);
        projectContainer.appendChild(newElement);
    const projectDeleteButton = document.createElement(`div`);
        projectDeleteButton.classList.add(`projectDeleteButton`);
        projectDeleteButton.innerHTML = "X";
        newElement.appendChild(projectDeleteButton);

        newElement.addEventListener(`click`, function(){

          selectProject(newElement, projectList);
        })

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

        updateSelectedProject(currentProject, projectList);

        updateProjectClasses(projectList);

        toggleProjectDisplays(currentProject, projectList);

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

        let selectedProject = newTask.project;
        updateSelectedProject(selectedProject, projectList);
        // Update selected project to the project this task is being appended to

        makeTaskBar(newTask, projectList);
        //Creates Dom element

        updateProjectClasses(projectList);

        taskForm.reset();
        //Reset form

        toggleDisplay(`taskFormDiv`, `flex`);
        //Make form dissappear

        return;
    })
}


// *****************************************0*****************************************0*****************************************0



function updateProjectClasses(projectList){
//This looks through the projectList and finds the one that isSelected, then applies the selected class and removes the selected class from all others


    const projects = document.getElementsByClassName(`projectElement`);
    const projectsArray = Array.from(projects);
    for (let project of projectsArray){
        let elementLong = project.id;
            let element = elementLong.slice(0, -14);
        let selected = findSelectedProject(projectList);
            if (element == selected){
                project.classList.add(`isSelected`)
            }
            else if (element !== selected){
                project.classList.remove(`isSelected`);
            }
    }
    return;
}




function getclickedProject(element){
    let id = element.id;
    let clickedProject = id.slice(0, -14);
    console.log(clickedProject);
    return clickedProject;
}


function selectProject(element, projectList){
    let selected = getclickedProject(element);
        console.log(`got selected`);
    updateSelectedProject(selected, projectList);
        console.log(`updated selected`);
    updateProjectClasses(projectList);
        console.log(`updated class list`);
    toggleProjectDisplays(selected)
        console.log(`projectTaskList display toggled`)

    return;
}









//High level goals:
// Apply listener to sidebar project divs to toggle selected project

// Allow user to view/edit task contents

//Add date functionality



export {
    toggleDisplay,
    displayProjectForm,
    displayTaskForm,
    cancelButtons,
    addListenerToTaskSubmit,
    addListenerToProjectSubmit,
    toggleProjectDisplays,
    updateProjectClasses,
    selectProject
}




 
