import createElement from './elementMaker.js';

//createElement([`id`, `class`], `div`,`innerText`, `locationId`)



function generateforms(){
    function taskForm(){
        createElement([`taskFormDiv`, `formDiv`], `div`, ``, `content`);
            createElement([`taskFormTitle`, `title`], `div`, `Create New Task`, `taskFormDiv`);
            createElement([`taskForm`], `form`, ``, `taskFormDiv`);
    }
    function projectForm(){
        createElement([`projectFormDiv`, `formDiv`], `div`, ``, `content`);
            createElement([`projectFormTitle`, `title`], `div`, `Create New Project`, `projectFormDiv`);
            createElement([`projectForm`], `form`, ``, `projectFormDiv`);
    }

    taskForm();
    projectForm();
}

    export default generateforms;


    // module.exports = {
    //    taskForm,
    //    projectForm
    // }