import { Project, Task, makeTask, pushTaskToProject } from "./projectManager";
import { makeTaskCard } from "./taskCards.js";

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
    const newProjectBtn = document.getElementById(`newProjectBtn`);
        newProjectBtn.addEventListener(`click`, function(){
        toggleDisplay(`projectFormDiv`, `flex`)
        })
        return;
}

function displayTaskForm(projectList){
    const newTaskBtn = document.getElementById(`newTaskBtn`);
        newTaskBtn.addEventListener(`click`, function(){
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



function newProject(projectList){
    const projectForm = document.getElementById(`projectForm`);
    projectForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        const projectNameInput = document.getElementById(`projectNameInput`);
        const newProject = new Project(projectNameInput.value, `no`, []);
        projectList.push(newProject);

        const newElement = document.createElement(`div`);
        // newElement.setAttribute(`id`, `${projectNameInput.value}`);
        //removed id declaration to avoid poluting global scope
        newElement.classList.add(`project`);
        newElement.innerHTML = projectNameInput.value;
        projectContainer = document.getElementById(`projectContainer`);
        projectContainer.appendChild(newElement);
        const projectDeleteButton = document.createElement(`div`);
        projectDeleteButton.classList.add(`projectDeleteButton`);
        projectDeleteButton.innerHTML = "X";
        newElement.appendChild(projectDeleteButton);
    toggleDisplay(`projectFormDiv`, `flex`);
    projectForm.reset();

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

        taskForm.reset();
        //Reset form

        toggleDisplay(`taskFormDiv`, `flex`);
        //Make form dissappear

        makeTaskCard(newTask, projectList)
        //Creates Dom element

    })

}

export {
    toggleDisplay,
    displayProjectForm,
    displayTaskForm,
    cancelButtons,
    newProject,
    addListenerToTaskSubmit
}

        //the following code should be broken down into a separate and smaller chunks?

//         makeTaskCard(newTask, projectList);

    
// }






 
