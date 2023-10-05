import {createElement, placeElement} from './elementMaker.js';

function makeTaskBar(task, projectList){
    let taskBar = createElement([`${task.name}taskBar`, `taskBar`], `div`, ``);
        placeElement(taskBar, `taskContainer`);
    let editButton = createElement([``, `editButton`], `button`, `Edit`);
        placeElement(editButton, `${task.name}taskBar`);
    let taskBarName = createElement([``, `taskBarName`], `div`, `${task.name}`);
        placeElement(taskBarName, `${task.name}taskBar`);
    let subMenu = createElement([`${task.name}subMenu`, `taskBarSubMenu`], `div`, ``);
        placeElement(subMenu, `${task.name}taskBar`);
    let taskBarUrgency = createElement([``, `taskBarUrgency`, `barWidget`], `div`, `${task.urgency}`);
        placeElement(taskBarUrgency, `${task.name}subMenu`);
        addUrgencyClass(taskBarUrgency, task);
    let taskBarStatus = createElement([``, `taskBarStatus`, `barWidget`], `div`, `${task.status}`);
        placeElement(taskBarStatus, `${task.name}subMenu`);

}

//Need limit on how many characters people can input for task name


function makeTaskCard(task, projectList){
    console.log(projectList)
    console.log(task);

    const taskElement = document.createElement(`div`);
        taskElement.classList.add(`taskCard`);

        const taskCardLeft = document.createElement(`div`);
        const taskCardRight = document.createElement(`div`);
            taskCardLeft.classList.add(`taskCardLeft`);
            taskCardRight.classList.add(`taskCardRight`);
            taskElement.appendChild(taskCardLeft);
            taskElement.appendChild(taskCardRight);

            const projectContainer = document.createElement(`div`);
                projectContainer.classList.add(`taskSectionContainer`);
                taskCardLeft.appendChild(projectContainer);
                const projectLabel = document.createElement(`div`);
                    projectLabel.classList.add(`taskAttributeLabel`);
                    projectLabel.innerHTML = `Project: `
                    projectContainer.appendChild(projectLabel);
                const projectValue = document.createElement(`div`);
                    projectValue.classList.add(`taskName`);
                    projectValue.innerHTML = task.project;
                    projectContainer.appendChild(projectValue);

            const nameContainer = document.createElement(`div`);
                nameContainer.classList.add(`taskSectionContainer`);
                taskCardLeft.appendChild(nameContainer);  
                const nameLabel = document.createElement(`div`);
                    nameLabel.classList.add(`taskAttributeLabel`);
                    nameLabel.innerHTML = `Task Name: `
                    nameContainer.appendChild(nameLabel);
                const taskName = document.createElement(`div`);
                    taskName.classList.add(`taskName`);
                    taskName.innerHTML = task.name;
                    nameContainer.appendChild(taskName);

            const descriptionContainer = document.createElement(`div`);
                descriptionContainer.classList.add(`taskSectionContainer`);
                taskCardRight.appendChild(descriptionContainer);  
                const descriptionLabel = document.createElement(`div`);
                    descriptionLabel.classList.add(`taskAttributeLabel`);
                    descriptionLabel.innerHTML = `Task Description: `
                    descriptionContainer.appendChild(descriptionLabel);
                const taskDescription = document.createElement(`div`);
                    taskDescription.classList.add(`taskDescription`);
                    taskDescription.innerHTML = task.description;
                    descriptionContainer.appendChild(taskDescription);

            const urgencyContainer = document.createElement(`div`);
                urgencyContainer.classList.add(`taskSectionContainer`);
                taskCardLeft.appendChild(urgencyContainer);  
                const urgencyLabel = document.createElement(`div`);
                    urgencyLabel.classList.add(`taskAttributeLabel`);
                    urgencyLabel.innerHTML = `Urgency: `
                    urgencyContainer.appendChild(urgencyLabel);
                const taskUrgency = document.createElement(`div`);
                    taskUrgency.classList.add(`taskUrgency`);
                    taskUrgency.innerHTML = task.urgency;
                    urgencyContainer.appendChild(taskUrgency);

                if (checkUrgency(task) ==  `HIGH`){
                    taskUrgency.classList.add(`highUrgency`);
                }
                else if (checkUrgency(task) ==  `Mid`){
                    taskUrgency.classList.add(`midUrgency`);
                }
                else if (checkUrgency(task) ==  `Low`){
                    taskUrgency.classList.add(`lowUrgency`);
                }

            const statusContainer = document.createElement(`div`);
                statusContainer.classList.add(`taskSectionContainer`);
                taskCardLeft.appendChild(statusContainer);
                const statusLabel = document.createElement(`div`);
                    statusLabel.classList.add(`taskAttributeLabel`);
                    statusLabel.innerHTML = `Status: `;
                    statusContainer.appendChild(statusLabel);
                const taskStatus = document.createElement(`div`);
                    taskStatus.classList.add(`taskStatus`);
                    taskStatus.innerHTML = task.status;
                    statusContainer.appendChild(taskStatus);

    const taskContainer = document.getElementById(`taskContainer`);
        taskContainer.appendChild(taskElement);
        
    return;
}






function addUrgencyClass(element, task){
    if (checkUrgency(task) ==  `HIGH`){
        element.classList.add(`highUrgency`);
        element.classList.remove(`midUrgency`, `lowUrgency`);
    }
    else if (checkUrgency(task) ==  `Mid`){
        element.classList.add(`midUrgency`);
        element.classList.remove(`highUrgency`, `lowUrgency`);
    }
    else if (checkUrgency(task) ==  `Low`){
        element.classList.add(`lowUrgency`);
        element.classList.remove(`highUrgency`, `midUrgency`);
    }
}



//Should also make a task bar for at a glance details of all tasks




function checkUrgency(task){
    let urgency = task.urgency;
    return urgency;
}



export {
    makeTaskCard,
    makeTaskBar
}