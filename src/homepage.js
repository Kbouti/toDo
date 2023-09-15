import createElement from './elementMaker.js';


//  Create element takes 4 arguments:
//  1. Array containing first the id, then any class attributes.
//  2. A string indicating the type of the new element    'div'
//  3. A string containing the innerhtml content.
//  4. A string containing the id of the element you'd like to append the new element to. The main container is #content.

//createElement([`id`, `class`], `div`,`innerText`, `locationId`)


function buildPage(){
    createElement([`header`], `div`, ``,`content`);
        createElement([`title`], `div`, `To Do List`, `header`);
    createElement([`body`], `div`, ``, `content`)
    createElement([`sidebar`], `div`, ``, `body`);
        createElement([`sidebarTitle`, `title`], `div`, `Projects`, `sidebar`);
        createElement([`newProjectBtn`, `addBtn`], `div`, ``, `sidebar`);
            createElement([`addGraphic`, `material-symbols-outlined`], `span`, `add`, `newProjectBtn`);
            createElement([`addProject`, `btnText`], `span`, `New Project`, `newProjectBtn`);
        createElement([`projectsContainer`], `div`, ``, `sidebar`);
    createElement([`mainBody`], `div`, ``, `body`);
        createElement([`bodyTitle`, `title`], `div`, `Tasks`, `mainBody`)
        createElement([`newTaskBtn`, `addBtn`], `div`, ``, `mainBody`);
            createElement([`addGraphic2`, `material-symbols-outlined`], `span`, `add`, `newTaskBtn`);
            createElement([`addTask`, `btnText`], `span`, `New Task`, `newTaskBtn`);

    createElement([`footer`], `div`, ``, `content`);
        createElement([`signature`], `div`, `Kbouti 2023`, `footer`);
}



export default buildPage;