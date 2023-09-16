import createElement from './elementMaker.js';

//createElement([`id`, `class`], `div`,`innerText`, `locationId`)



function generateforms(){
    function taskForm(){
        createElement([`taskFormDiv`, `form`], `div`, ``, `content`);
            createElement([`taskFormTitle`, `title`], `div`, `Create New Task`, `taskFormDiv`);
    }
    function projectForm(){
        createElement([`projectFormDiv`, `form`], `div`, ``, `content`);
            createElement([`projectFormTitle`, `title`], `div`, `Create New Project`, `projectFormDiv`);
    }

    taskForm();
    projectForm();
}

    export default generateforms;


    // module.exports = {
    //    taskForm,
    //    projectForm
    // }