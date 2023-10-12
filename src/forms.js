import {createElement, placeElement} from './elementMaker.js';


//createElement([`id`, `class`], `div`,`innerText`, `locationId`)




    function taskForm(){
        let taskFormDiv = createElement([`taskFormDiv`, `formDiv`], `div`, ``);
            placeElement(taskFormDiv, `content`);
            let taskFormTitle = createElement([`taskFormTitle`, `title`], `div`, `Create New Task`);
                placeElement(taskFormTitle, `taskFormDiv`);
                let taskForm = createElement([`taskForm`, `form`], `form`, ``);
                    placeElement(taskForm, `taskFormDiv`);
                    taskForm.setAttribute(`autocomplete`, `off`);
                let taskFormContainer1 = createElement([`taskFormContainer1`, `formContainer`], `div`, ``);
                    placeElement(taskFormContainer1, `taskForm`);
                    let projectSelectorLabel = createElement([`projectSelectorLabel`, `label`], `label`, `Project:`);
                        placeElement(projectSelectorLabel, `taskFormContainer1`);
                    let projectDropDown = createElement([`projectDropDown`], `select`, ``);
                        placeElement(projectDropDown, `taskFormContainer1`);
            let taskFormContainer2 = createElement([`taskFormContainer2`, `formContainer`], `div`, ``);
                placeElement(taskFormContainer2, `taskForm`);
                let taskNameLabel = createElement([`taskNameLabel`, `label`], `label`, `Task Name: `);
                    placeElement(taskNameLabel, `taskFormContainer2`);
                    taskNameLabel.setAttribute(`for`, `taskName`);
                let taskNameInput = createElement([`taskNameInput`, `textInput`], `input`, ``);
                    placeElement(taskNameInput, `taskFormContainer2`);
                    taskNameInput.setAttribute(`required`, `true`);
                    taskNameInput.setAttribute(`name`, `taskName`);                
            let taskFormContainer3 = createElement([`taskFormContainer3`, `formContainer`], `div`, ``);
                placeElement(taskFormContainer3, `taskForm`);
                let taskDescriptionLabel = createElement([`taskDescriptionLabel`, `label`], `label`, `Task Description: `);
                    placeElement(taskDescriptionLabel, `taskFormContainer3`);  
                    taskDescriptionLabel.setAttribute(`for`, `taskDescription`);
                let taskDescriptionInput = createElement([`taskDescriptionInput`, `textInput`], `textarea`, ``, `taskFormContainer3`);
                    placeElement(taskDescriptionInput, `taskFormContainer3`);
                    taskDescriptionInput.setAttribute(`name`, `taskDescription`);
            let taskFormContainer4 = createElement([`taskFormContainer4`, `formContainer`], `div`, ``);
                placeElement(taskFormContainer4, `taskForm`);
                let taskUrgencyLabel = createElement([`taskUrgencyLabel`, `label`], `label`, `Urgency:`);
                    placeElement(taskUrgencyLabel, `taskFormContainer4`);
                    taskUrgencyLabel.setAttribute(`for`, `taskUrgency`);
                let urgencyDropDown = createElement([`urgencyDropDown`], `select`, ``);
                    placeElement(urgencyDropDown, `taskFormContainer4`);                            
                    urgencyDropDown.setAttribute(`name`, `taskUrgency`);
                    let urgencyOption = '';
                    let urgency = [`HIGH`, `Mid`, `Low`];
                    for(let i = 0; i < urgency.length; i++){
                        urgencyOption += '<option value="'+urgency[i] + '">' + urgency[i]+"</option>"
                    }
                    urgencyDropDown.innerHTML = urgencyOption;
                    urgencyDropDown.selectedIndex = 1;
            let taskFormContainer5 = createElement([`taskFormContainer5`, `formContainer`], `div`, ``);
                placeElement(taskFormContainer5, `taskForm`);
                let taskStatusLabel = createElement([`taskStatusLabel`, `label`], `label`, `Status:`);
                    placeElement(taskStatusLabel, `taskFormContainer5`);             
                    taskStatusLabel.setAttribute(`for`, `taskStatus`);
                let statusDropDown = createElement([`statusDropDown`], `select`, ``);
                    placeElement(statusDropDown, `taskFormContainer5`);
                    statusDropDown.setAttribute(`name`, `taskStatus`);
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
                    statusDropDown.innerHTML = statusOption;
                    statusDropDown.selectedIndex = 0;
    
            let taskFormContainer6 = createElement([`taskFormContainer6`, `formContainer`], `div`, ``);
                placeElement(taskFormContainer6, `taskForm`);
                let newTaskCancelButton = createElement([`newTaskCancelButton`, `cancel`, `button`], `button`, `Cancel`);
                    placeElement(newTaskCancelButton, `taskFormContainer6`);
                    newTaskCancelButton.setAttribute(`type`, `reset`);
                let newTaskSubmitButton = createElement([`newTaskSubmitButton`, `submit`, `button`], `button`, `Submit`);
                    placeElement(newTaskSubmitButton, `taskFormContainer6`);
                    newTaskSubmitButton.setAttribute(`type`, `submit`);
        return;
    }




    function projectForm(){
        let projectFormDiv = createElement([`projectFormDiv`, `formDiv`], `div`, ``);
            placeElement(projectFormDiv, `content`);



            let projectFormTitle = createElement([`projectFormTitle`, `title`], `div`, `Create New Project`);
                placeElement(projectFormTitle, `projectFormDiv`);
            let projectForm = createElement([`projectForm`, `form`], `form`, ``);
                placeElement(projectForm, `projectFormDiv`);
                projectForm.setAttribute(`autocomplete`, `off`);
                let projectFormContainer1 = createElement([`projectFormContainer1`, `formContainer`], `div`, ``);
                    placeElement(projectFormContainer1, `projectForm`);
                    // let projectNameLabel = createElement([`projectNameLabel`, `label`], `label`, `Project Name: `);
                    //     placeElement(projectNameLabel, `projectFormContainer1`);
                    //     projectNameLabel.setAttribute(`for`, `projectName`);
                    let projectNameInput = createElement([`projectNameInput`, `textInput`], `input`, ``);
                        placeElement(projectNameInput, `projectFormContainer1`);
                        projectNameInput.setAttribute(`required`, `true`);
                        projectNameInput.setAttribute(`name`, `projectName`);
                        projectNameInput.setAttribute(`placeholder`, `Project Name`);



                let projectFormContainer2 = createElement([`projectFormContainer2`, `formContainer`], `div`, ``);
                    placeElement(projectFormContainer2, `projectForm`);
                    let newProjectCancelButton = createElement([`newProjectCancelButton`, `cancel`, `button`], `button`, `Cancel`);
                        placeElement(newProjectCancelButton, `projectFormContainer2`);
                        newProjectCancelButton.setAttribute(`type`, `reset`);
                    let newProjectSubmitButton = createElement([`newProjectSubmitButton`, `submit`, `button`], `button`, `Submit`);
                        placeElement(newProjectSubmitButton, `projectFormContainer2`);
                        newProjectSubmitButton.setAttribute(`type`, `submit`);
    }

export{
    taskForm,
    projectForm
}
