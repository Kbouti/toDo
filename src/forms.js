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
                    projectNameLabel.setAttribute(`required`, `true`);
                    projectNameLabel.setAttribute(`for`, `projectName`);
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