import createElement from './elementMaker.js';


//createElement([`id`, `class`], `div`,`innerText`, `locationId`)




    function taskForm(){
        createElement([`taskFormDiv`, `formDiv`], `div`, ``, `content`);
            createElement([`taskFormTitle`, `title`], `div`, `Create New Task`, `taskFormDiv`);
            createElement([`taskForm`, `form`], `form`, ``, `taskFormDiv`);
                const taskForm = document.getElementById(`taskForm`);
                taskForm.setAttribute(`autocomplete`, `off`);

            createElement([`taskFormContainer1`, `formContainer`], `div`, ``, `taskForm`)
                createElement([`projectSelectorLabel`, `label`], `label`, `Project:`, `taskFormContainer1`);
                createElement([`projectDropDown`], `select`, ``, `taskFormContainer1`);

            createElement([`taskFormContainer2`, `formContainer`], `div`, ``, `taskForm`)
                createElement([`taskNameLabel`, `label`], `label`, `Task Name: `, `taskFormContainer2`);
                    const taskNameLabel = document.getElementById(`taskNameLabel`);
                    taskNameLabel.setAttribute(`for`, `taskName`);
                createElement([`taskNameInput`, `textInput`], `input`, ``, `taskFormContainer2`);
                    const taskNameInput = document.getElementById(`taskNameInput`);
                    taskNameInput.setAttribute(`required`, `true`);
                    taskNameInput.setAttribute(`name`, `taskName`);
                            
            createElement([`taskFormContainer3`, `formContainer`], `div`, ``, `taskForm`)
                createElement([`taskDescriptionLabel`, `label`], `label`, `Task Description: `, `taskFormContainer3`);
                    const taskDescriptionLabel = document.getElementById(`taskDescriptionLabel`);                            
                    taskDescriptionLabel.setAttribute(`for`, `taskDescription`);
                createElement([`taskDescriptionInput`, `textInput`], `input`, ``, `taskFormContainer3`);
                    const taskDescriptionInput = document.getElementById(`taskDescriptionInput`);
                    taskDescriptionInput.setAttribute(`name`, `taskDescription`);
    
            createElement([`taskFormContainer4`, `formContainer`], `div`, ``, `taskForm`)
                createElement([`taskUrgencyLabel`, `label`], `label`, `Urgency:`, `taskFormContainer4`);
                    const taskUrgencyLabel = document.getElementById(`taskUrgencyLabel`);                            
                    taskUrgencyLabel.setAttribute(`for`, `taskUrgency`);
                createElement([`urgencyDropDown`], `select`, ``, `taskFormContainer4`);
                    const urgencyDropDown = document.getElementById(`urgencyDropDown`);                            
                    urgencyDropDown.setAttribute(`name`, `taskUrgency`);
                    let urgencyOption = '';
                    let urgency = [`HIGH`, `Mid`, `Low`];
                    for(let i = 0; i < urgency.length; i++){
                        urgencyOption += '<option value="'+urgency[i] + '">' + urgency[i]+"</option>"
                    }
                    urgencyDropDown.innerHTML = urgencyOption;
                    urgencyDropDown.selectedIndex = 1;

            createElement([`taskFormContainer5`, `formContainer`], `div`, ``, `taskForm`)
                createElement([`taskStatusLabel`, `label`], `label`, `Status:`, `taskFormContainer5`);
                    const taskStatusLabel = document.getElementById(`taskStatusLabel`);                            
                    taskStatusLabel.setAttribute(`for`, `taskStatus`);
                createElement([`statusDropDown`], `select`, ``, `taskFormContainer5`);
                    const statusDropDown = document.getElementById(`statusDropDown`);                            
                    statusDropDown.setAttribute(`name`, `taskStatus`);
                    let statusOption = '';
                    let status = [`Not Started`, `In Progress`, `Parts On Order`, `Nearly Complete`, `Complete`];
                    for(let i = 0; i < status.length; i++){
                        statusOption += '<option value="'+status[i] + '">' + status[i]+"</option>"
                    }
                    statusDropDown.innerHTML = statusOption;
                    statusDropDown.selectedIndex = 0;
    
            createElement([`taskFormContainer-1`, `formContainer`], `div`, ``, `taskForm`)
                createElement([`newTaskCancelButton`, `cancel`, `button`], `button`, `Cancel`, `taskFormContainer-1` )
                    const newTaskCancelButton = document.getElementById(`newTaskCancelButton`);
                    newTaskCancelButton.setAttribute(`type`, `reset`);

                createElement([`newTaskSubmitButton`, `submit`, `button`], `button`, `Submit`, `taskFormContainer-1` )
                    const newTaskSubmitButton = document.getElementById(`newTaskSubmitButton`);
                    newTaskSubmitButton.setAttribute(`type`, `submit`);
        return;
    }




    function projectForm(){
        createElement([`projectFormDiv`, `formDiv`], `div`, ``, `content`);
            createElement([`projectFormTitle`, `title`], `div`, `Create New Project`, `projectFormDiv`);
            createElement([`projectForm`, `form`], `form`, ``, `projectFormDiv`);
                const projectForm = document.getElementById(`projectForm`);
                projectForm.setAttribute(`autocomplete`, `off`);
                createElement([`projectFormContainer1`, `formContainer`], `div`, ``, `projectForm`)
                createElement([`projectNameLabel`, `label`], `label`, `Project Name: `, `projectFormContainer1`);
                    const projectNameLabel = document.getElementById(`projectNameLabel`);
                    projectNameLabel.setAttribute(`for`, `projectName`);
                createElement([`projectNameInput`, `textInput`], `input`, ``, `projectFormContainer1`);
                    const projectNameInput = document.getElementById(`projectNameInput`);
                    projectNameInput.setAttribute(`required`, `true`);
                    projectNameInput.setAttribute(`name`, `projectName`);
                createElement([`projectFormContainer2`, `formContainer`], `div`, ``, `projectForm`)
                createElement([`newProjectCancelButton`, `cancel`, `button`], `button`, `Cancel`, `projectFormContainer2` )
                    const newProjectCancelButton = document.getElementById(`newProjectCancelButton`);
                    newProjectCancelButton.setAttribute(`type`, `reset`);
                createElement([`newProjectSubmitButton`, `submit`, `button`], `button`, `Submit`, `projectFormContainer2` )
                    const newProjectSubmitButton = document.getElementById(`newProjectSubmitButton`);
                    newProjectSubmitButton.setAttribute(`type`, `submit`);


    }

export{
    taskForm,
    projectForm
}
