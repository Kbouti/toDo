import createElement from './elementMaker.js';

//createElement([`id`, `class`], `div`,`innerText`, `locationId`)



function generateforms(){
    function taskForm(){
        createElement([`taskForm`, `form`], `div`, ``, `content`);
        createElement([`taskFormTitle`, `title`], `div`, `Create New Task`, `taskForm`);
    }
    function projectForm(){
        createElement([`projectForm`, `form`], `div`, ``, `content`);
        createElement([`projectFormTitle`, `title`], `div`, `Create New Project`, `projectForm`);
    }

    taskForm();
    projectForm();
}

    export default generateforms;


    // module.exports = {
    //    taskForm,
    //    projectForm
    // }