import createElement from './elementMaker.js';

//createElement([`id`, `class`], `div`,`innerText`, `locationId`)



function generateforms(){
    function taskForm(){
        createElement([`taskFormDiv`, `formDiv`], `div`, ``, `content`);
            createElement([`taskFormTitle`, `title`], `div`, `Create New Task`, `taskFormDiv`);
            createElement([`taskForm`, `form`], `form`, ``, `taskFormDiv`);
                const taskForm = document.getElementById(`taskForm`);
                taskForm.setAttribute(`autocomplete`, `off`);
                createElement([`projectSelectorLabel`, `label`], `label`, `Project:`, `taskForm`);


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

    export default generateforms;


    // module.exports = {
    //    taskForm,
    //    projectForm
    // }