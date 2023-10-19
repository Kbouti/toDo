import {createElement, placeElement} from './elementMaker.js';
import { findSelectedProject } from './projectManager.js';

import { toggleProjectDisplays } from './domManipulator.js';







function makeTaskBar(task, projectList){

    let project = task.project;

  
    let taskBar = createElement([`${task.name}taskBar`, `taskBar`], `div`, ``);
        placeElement(taskBar, `${project}taskContainer`);
    let editButton = createElement([``, `material-symbols-outlined`, `clickable`], `span`, `edit`);
        placeElement(editButton, `${task.name}taskBar`);
        editButton.addEventListener(`click`, function(){
            console.log(`edit button clicked for task:`);
            console.log(task.name)
            taskCard(task);

        })

    let deleteButton = createElement([``, `material-symbols-outlined`, `clickable`], `span`, `delete`);
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
                    let leftSideContainer = createElement([``, `leftSideContainer`], `div`, ``);
                        cardFormLeft.appendChild(leftSideContainer);
                        let cardNameInput = createElement([``, `cardNameInput`], `input`, '');
                            leftSideContainer.appendChild(cardNameInput);
                            cardNameInput.value = task.name;
                            cardNameInput.setAttribute(`name`, `taskName`);
                            

                        let cardUrgencySelect = createElement([``, `cardUrgencySelect`], `select`, ``)
                            leftSideContainer.appendChild(cardUrgencySelect);
                            cardUrgencySelect.setAttribute(`name`, `taskUrgency`)
                            let urgencyOption = ``;
                            let urgency = [`HIGH`, `Mid`, `Low`];
                            for(let i = 0; i < urgency.length; i++){
                                urgencyOption += '<option value="'+urgency[i] + '">' + urgency[i]+"</option>"
                            }
                            cardUrgencySelect.innerHTML = urgencyOption;
                            //Populates dropdown options
                                let taskUrgency = task.urgency;
                                let urgencyIndex;
                                for (let i = 0;i<urgency.length;i++){
                                    if (urgency[i] == taskUrgency){
                                        urgencyIndex = i;
                                    }
                                };
                                cardUrgencySelect.selectedIndex = urgencyIndex;
                            //Sets current urgency as selected






                        let cardStatusSelect = createElement([``, `cardStatusSelect`], `select`, ``)
                            leftSideContainer.appendChild(cardStatusSelect);
                            cardStatusSelect.setAttribute(`name`, `taskStatus`)
                            let statusOption = '';
                            let status = [
                                `Not Started`,
                                `In Progress`,
                                `Parts On Order`,
                                `Nearly Complete`,
                                `Complete`
                            ];
                            for(let i = 0; i < status.length; i++){
                                statusOption += '<option value="'+status[i] + '">' + status[i]+"</option>"
                            }
                            cardStatusSelect.innerHTML = statusOption;
                            //Populates dropdown options

                                let taskStatus = task.status;
                                let statusIndex;
                                for (let i = 0;i < status.length;i++){
                                    if (taskStatus == status[i]){
                                        statusIndex = i;
                                    };
                                };
                                cardStatusSelect.selectedIndex = statusIndex;


                        let cardFormButtonsContainer = createElement([``, `cardFormButtonsContainer`], `div`, ``);
                            leftSideContainer.appendChild(cardFormButtonsContainer);
                        
                            let taskCardCancelButton = createElement([`taskEditCancel`, `taskCardButton`, `cancel`, `button`], `div`, `Cancel`);
                                cardFormButtonsContainer.appendChild(taskCardCancelButton);
                                taskCardCancelButton.addEventListener(`click`, function(){
                                    content.removeChild(card);
                                })

                            let taskCardSubmitChangesButton = createElement([``, `taskCardSubmitChangesButton`, `submit`, `button`], `div`, `Save Changes`);
                                taskCardSubmitChangesButton.setAttribute(`type`, 'submit');
                                cardFormButtonsContainer.append(taskCardSubmitChangesButton);
                                taskCardSubmitChangesButton.addEventListener(`click`, function(event){
                                    
                                    event.preventDefault();
                                    console.log(`change Task form submitted`)
        
                                    let userResponse = confirm(`Are you sure you want to edit the contents of this task?`);
                                    console.log(`user response: ${userResponse}`);


                                    if (userResponse == false){
                                        content.removeChild(card);
                                    }
                                    else {
                                        updateTask(task);
                            
                                        //edit the contents of the task


                                    }
                                })

                let cardFormRight = createElement([``, `cardFormRight`, `formHalf`], `div`, ``);
                    cardForm.appendChild(cardFormRight);
    
                    let cardDescriptionInput = createElement([``, `cardDescriptionInput`], `textarea`, ``);
                        cardFormRight.appendChild(cardDescriptionInput);
                        cardDescriptionInput.value = task.description;


}


// ****************************************************************************************
// Next step is add event listener to cardForm  that will edit the existing task. 
// Should we have a confirm message for saving changes? yeah prolly

function updateTask(task){
    console.log(`update task function called for task:`)
    console.log(task);




}








function deleteTask(task, projectList){
    task.delete();
// ^This deletes the task from the projectList
// The rest deletes the dom element 
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