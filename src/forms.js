import createElement from './elementMaker.js';

//createElement([`id`, `class`], `div`,`innerText`, `locationId`)



function generateForms(){
    function taskForm(){
        createElement([`taskFormDiv`, `formDiv`], `div`, ``, `content`);
            createElement([`taskFormTitle`, `title`], `div`, `Create New Task`, `taskFormDiv`);
            createElement([`taskForm`, `form`], `form`, ``, `taskFormDiv`);
                const taskForm = document.getElementById(`taskForm`);
                taskForm.setAttribute(`autocomplete`, `off`);
            createElement([`taskFormContainer1`, `formContainer`], `div`, ``, `taskForm`)
                createElement([`projectSelectorLabel`, `label`], `label`, `Project:`, `taskFormContainer1`);
                createElement([`projectDropDown`], `select`, ``, `taskFormContainer1`);
                    const projectDropDown = document.getElementById(`projectDropDown`);
                    let option = ``;

                    let projects = [`car`, `bike`, `guns`]
                    //need array projects 
                    for(let i = 0; i < projects.length; i++){
                        option += '<option value="'+projects[i] + '">' + projects[i]+"</option>"
                    }
                    projectDropDown.innerHTML = option;
                    createElement([`taskFormContainer2`, `formContainer`], `div`, ``, `taskForm`)
                        createElement([`taskNameLabel`, `label`], `label`, `Task Name: `, `taskFormContainer2`);
                            const taskNameLabel = document.getElementById(`taskNameLabel`);
                            taskNameLabel.setAttribute(`for`, `taskName`);
                        createElement([`taskNameInput`, `textInput`], `input`, ``, `taskFormContainer2`);
                            const taskNameInput = document.getElementById(`taskNameInput`);
                            taskNameInput.setAttribute(`required`, `true`);
                            taskNameInput.setAttribute(`for`, `taskName`);
                            

                    createElement([`taskFormContainer3`, `formContainer`], `div`, ``, `taskForm`)
                        createElement([`taskDescriptionLabel`, `label`], `label`, `Task Description: `, `taskFormContainer3`);
                            const taskDescriptionLabel = document.getElementById(`taskDescriptionLabel`);                            
                            taskDescriptionLabel.setAttribute(`for`, `taskDescription`);
                        createElement([`taskDescriptionInput`, `textInput`], `input`, ``, `taskFormContainer3`);
                            const taskDescriptionInput = document.getElementById(`taskDescriptionInput`);
                            taskDescriptionInput.setAttribute(`for`, `taskDescription`);
    


                    createElement([`taskFormContainer-1`, `formContainer`], `div`, ``, `taskForm`)
                        createElement([`newTaskCancelButton`, `cancel`, `button`], `button`, `Cancel`, `taskFormContainer-1` )
                        createElement([`newTaskSubmitButton`, `submit`, `button`], `button`, `Submit`, `taskFormContainer-1` )
                            const newTaskSubmitButton = document.getElementById(`newTaskSubmitButton`);
                            newTaskSubmitButton.setAttribute(`type`, `submit`);
            



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
                    projectNameInput.setAttribute(`for`, `projectName`);
                createElement([`projectFormContainer2`, `formContainer`], `div`, ``, `projectForm`)
                createElement([`newProjectCancelButton`, `cancel`, `button`], `button`, `Cancel`, `projectFormContainer2` )
                createElement([`newProjectSubmitButton`, `submit`, `button`], `button`, `Submit`, `projectFormContainer2` )
                    const newProjectSubmitButton = document.getElementById(`newProjectSubmitButton`);
                    newProjectSubmitButton.setAttribute(`type`, `submit`);


    }

    taskForm();
    projectForm();
}

    export default generateForms;


    // module.exports = {
    //    taskForm,
    //    projectForm
    // }