import {createElement, placeElement} from './elementMaker.js';
import { findSelectedProject } from './projectManager.js';

import { toggleProjectDisplays } from './domManipulator.js';







function makeTaskBar(task, projectList){

    let project = task.project;

  
    let taskBar = createElement([`${task.name}taskBar`, `taskBar`], `div`, ``);
        placeElement(taskBar, `${project}taskContainer`);
    let editButton = createElement([``, `material-symbols-outlined`], `span`, `edit`);
        placeElement(editButton, `${task.name}taskBar`);
        editButton.addEventListener(`click`, function(){
            console.log(task);
            taskCard(task);

        })





    let deleteButton = createElement([``, `material-symbols-outlined`], `span`, `delete`);
        placeElement(deleteButton, `${task.name}taskBar`);
        deleteButton.addEventListener(`click`, function(){
            console.log(`${task.name} task delete clicked`)

            let userResponse = confirm(`Are you sure you want to delete this task?`)
            console.log(userResponse);
            if (userResponse == true){
                //delete task from projectList and remove dom element
                deleteTask(task, projectList);
            }
        })






    let taskBarName = createElement([``, `taskBarName`], `div`, `${task.name}`);
        placeElement(taskBarName, `${task.name}taskBar`);
    let subMenu = createElement([`${task.name}subMenu`, `taskBarSubMenu`], `div`, ``);
        placeElement(subMenu, `${task.name}taskBar`);
    let taskBarUrgency = createElement([``, `taskBarUrgency`, `barWidget`, `barUrgency`], `div`, `${task.urgency}`);
        placeElement(taskBarUrgency, `${task.name}subMenu`);
        addUrgencyClass(taskBarUrgency, task);
    let taskBarStatus = createElement([``, `taskBarStatus`, `barWidget`, `barStatus`], `div`, `${task.status}`);
        placeElement(taskBarStatus, `${task.name}subMenu`);
        addStatusClass(taskBarStatus, task);


    const selected = findSelectedProject(projectList);

    toggleProjectDisplays(selected, projectList);
}






function taskCard(task) {
    let content = document.getElementById(`content`);
        let card = createElement(['', `taskCard`], `div`, ``);
            content.appendChild(card);
            let cardForm = createElement([``, `taskCardForm`], `form`, ``);
                card.appendChild(cardForm);
                let cardFormLeft = createElement([``, `cardFormLeft`, `formHalf`], `div`, ``);
                    cardForm.appendChild(cardFormLeft);
                let cardFormRight = createElement([``, `cardFormRight`, `formHalf`], `div`, ``);
                    cardForm.appendChild(cardFormRight);

                    let cardNameInput = createElement([``, `cardNameInput`], `input`, '');
                        cardFormLeft.appendChild(cardNameInput);
                        cardNameInput.value = task.name;


                    let cardPrioritySelect = createElement([``, `cardPrioritySelect`], `select`, ``)
                        cardFormLeft.appendChild(cardPrioritySelect);

                    let cardUrgencySelect = createElement([``, `cardUrgencySelect`], `select`, ``)
                        cardFormLeft.appendChild(cardUrgencySelect);



                    let cardDescriptionInput = createElement([``, `cardDescriptionInput`], `textarea`, ``);
                        cardFormRight.appendChild(cardDescriptionInput);
                        cardDescriptionInput.value = task.description;

        let taskCardCancelButton = createElement([`taskEditCancel`, `taskCardButton`, `cancel`, `button`], `div`, `Cancel`);
            cardFormLeft.appendChild(taskCardCancelButton);
            taskCardCancelButton.addEventListener(`click`, function(){
                content.removeChild(card);
            })

}



// ***************************************************************************************************************************************************************************

function deleteTask(task, projectList){
    task.delete();
    //need to write method for deleting task in projectManager on Task constructor

    //NOT COMPLETE. This removes the dom element but doesn't take it out of the content of the project in projectList. 
    //Noticing that this example task somehow isn't in the content? Need to see why that wasn't added

    let taskName = task.name;
    let projectName = task.project;

    let taskContainer = document.getElementById(`${projectName}taskContainer`);
    let taskBar = document.getElementById(`${taskName}taskBar`);
    taskContainer.removeChild(taskBar);

}








//Need limit on how many characters people can input for task name





function checkUrgency(task){
    let urgency = task.urgency;
    return urgency;
}
function addUrgencyClass(element, task){
    if (checkUrgency(task) ==  `HIGH`){
        element.classList.add(`urgencyHigh`);
        element.classList.remove(`urgencyMid`, `urgencyLow`);
    }
    else if (checkUrgency(task) ==  `Mid`){
        element.classList.add(`urgencyMid`);
        element.classList.remove(`urgencyHigh`, `urgencyLow`);
    }
    else if (checkUrgency(task) ==  `Low`){
        element.classList.add(`urgencyLow`);
        element.classList.remove(`urgencyHigh`,`urgencyMid`);
    }
}

function checkStatus(task){
    let status = task.status;
    return status;
}
function addStatusClass(element, task){
    let status = checkStatus(task);
    switch (status) {
        case `Not Started`:
            element.classList.add(`statusNotStarted`);
            element.classList.remove(
                `statusInProgress`,
                `statusPartsOnOrder`,
                `statusNearlyComplete`,
                `statusComplete`
            );
        break;
        case `In Progress`:
            element.classList.add(`statusInProgress`);
            element.classList.remove(
                `statusNotStarted`,
                `statusPartsOnOrder`,
                `statusNearlyComplete`,
                `statusComplete`
            );
        break;
        case `Parts On Order`:
            element.classList.add(`statusPartsOnOrder`);
            element.classList.remove(
                `statusNotStarted`,
                `statusInProgress`,
                `statusNearlyComplete`,
                `statusComplete`
            );
        break;    
        case `Nearly Complete`:
            element.classList.add(`statusNearlyComplete`);
            element.classList.remove(
                `statusNotStarted`,
                `statusInProgress`,
                `statusPartsOnOrder`,
                `statusComplete`
            );
        break;
        
        case `Complete`:
            element.classList.add(`statusComplete`);
            element.classList.remove(
                `statusNotStarted`,
                `statusInProgress`,
                `statusPartsOnOrder`,
                `statusNearlyComplete`,
            );
        break;
        default:
            console.log(`Something weird happened, no task status added`);        

    }
}







export {
    makeTaskBar
}