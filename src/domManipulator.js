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
    projectList,
    saveToLocalStorage,
    checkLocalStorage
}
from "./projectManager";

import { makeTaskCard, makeTaskBar } from "./taskCards.js";

import { createElement } from "./elementMaker";


function newProjectElement(project, projectList){
    const newElement = createElement([`${project.name}ProjectElement`, `projectElement`, `clickable`], `div`, project.name)
        projectContainer = document.getElementById(`projectContainer`);
        projectContainer.appendChild(newElement);
    const projectDeleteButton = createElement([``, `projectDeleteButton`], `div`, `X`);
        newElement.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener(`click`, function(e){
            e.stopPropagation();
            // ^Stops the triggering of outer element event listener
            let userResponse = confirm(`Deleting this project will also delete all the tasks within. Are you sure you want to continue?`);
            if (userResponse == true){
                project.delete(projectList);
                // ^Removes project from projectList and remove element from DOM. 
                selectMisc(projectList);
                // ^Applies isSelected attribute to Misc project, applies selected class and unhides Misc taskContainer
            }






            saveToLocalStorage(projectList);






            return;
        })
    newElement.addEventListener(`click`, function(){
        selectProject(newElement, projectList);
    })
    return;
}


function selectMisc(projectList){
    for (let i =0; i<projectList.length; i++){
        if (projectList[i].name == `Misc`){
            let miscProject = projectList[i];
            miscProject.isSelected = true;
        }
    }
    //applies isSelected property to Misc task in projectList

    let MiscProjectElement = document.getElementById(`MiscProjectElement`);
        MiscProjectElement.classList.add(`isSelected`);
        // Applies selected class to project

    let MisctaskContainer = document.getElementById(`MisctaskContainer`);
        MisctaskContainer.classList.remove(`hidden`);
        //unhides the relevant task container
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
// Do I need this function? I thought we were hiding using a hidden class

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











// ***************************************************************************************
// The following is the first instance of projectList

function displayTaskForm(projectList){
    const newTaskButton = document.getElementById(`newTaskButton`);
        newTaskButton.addEventListener(`click`, function(){
//populate dropdown menu with current projects:
        let option = ``;
        for(let i = 0; i < projectList.length; i++){
        option += `<option value=${projectList[i].name}>` + projectList[i].name+"</option>"
        }
        projectDropDown.innerHTML = option;
        let selected = findSelectedProject(projectList);
            let index;
            for (let i = 0;i < projectList.length; i++){
                if (projectList[i].name == selected){
                    index = i;
                }
            }
        projectDropDown.selectedIndex = index;
// ^Finds selected project and sets it as default 
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




        // i removed projectList here because I don't think we need it:
        let newProject = makeProject();
        currentProject = newProject.name;
        //Make new project

        pushProjectToProjectList(newProject, projectList);
        //Push project to projectList

        newProjectElement(newProject, projectList);
        //Creates the dom element for the new project

        projectForm.reset();
        //Resets the form

        updateSelectedProject(currentProject, projectList);

        updateProjectClasses(projectList);

        toggleProjectDisplays(currentProject, projectList);

        toggleDisplay(`projectFormDiv`, `flex`);
        //Dissapears the form










        saveToLocalStorage(projectList);







    return;
    })
}



function addListenerToTaskSubmit(projectList){
    const taskForm = document.getElementById(`taskForm`);
    taskForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        //prevent default

        let newTask = makeTask();
        //Make new task using the values of the form inputs

        pushTaskToProject(newTask, projectList);
        //Append new task to proper project in project list

        let selectedProject = newTask.project;
        updateSelectedProject(selectedProject, projectList);
        // Update selected project to the project this task is being appended to

        makeTaskBar(newTask, projectList);
        //Creates Dom element

        updateProjectClasses(projectList);

        taskForm.reset();
            let urgencyDropDown = document.getElementById(`urgencyDropDown`);
                urgencyDropDown.selectedIndex = 1;
        //Reset form AND return default urgency to mid

        toggleDisplay(`taskFormDiv`, `flex`);
        //Make form dissappear








        saveToLocalStorage(projectList);










        return;
    })
}



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
    return clickedProject;
}


function selectProject(element, projectList){
    let selected = getclickedProject(element);
    updateSelectedProject(selected, projectList);
    updateProjectClasses(projectList);
    toggleProjectDisplays(selected)













    saveToLocalStorage(projectList);









    return;
}



export {
    toggleDisplay,
    displayProjectForm,
    displayTaskForm,
    cancelButtons,
    addListenerToTaskSubmit,
    addListenerToProjectSubmit,
    toggleProjectDisplays,
    updateProjectClasses,
    selectProject,
    newProjectElement
}


// figure out local storage
// https://www.youtube.com/watch?v=fYTTUBa-lPc


 
