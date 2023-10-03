import {createElement,  placeElement } from './elementMaker.js';


//  Create element takes 4 arguments:
//  1. Array containing first the id, then any class attributes.
//  2. A string indicating the type of the new element    'div'
//  3. A string containing the innerhtml content.
//  4. A string containing the id of the element you'd like to append the new element to. The main container is #content.

//createElement([`id`, `class`], `div`,`innerText`, `locationId`)


function buildPage(){
    let header = createElement([`header`], `div`, ``);
        placeElement(header, `content`);
        let title = createElement([`title`], `div`, `To Do List`);
            placeElement(title, `header`);

    let body = createElement([`body`], `div`, ``)
        placeElement(body, `content`);




    let sidebar = createElement([`sidebar`], `div`, ``)
        placeElement(sidebar, `body`);

        let sidebarTitle = createElement([`sidebarTitle`, `title`], `div`, `Projects`);
            placeElement(sidebarTitle, `sidebar`);
            
        createElement([`newProjectBtn`, `addBtn`], `div`, ``, `sidebar`);
            createElement([`addGraphic`, `material-symbols-outlined`], `span`, `add`, `newProjectBtn`);
            createElement([`addProject`, `btnText`], `span`, `New Project`, `newProjectBtn`);
        createElement([`projectContainer`], `div`, ``, `sidebar`);
    createElement([`mainBody`], `div`, ``, `body`);
        createElement([`bodyTitle`, `title`], `div`, `Tasks`, `mainBody`)
        createElement([`newTaskBtn`, `addBtn`], `div`, ``, `mainBody`);
            createElement([`addGraphic2`, `material-symbols-outlined`], `span`, `add`, `newTaskBtn`);
            createElement([`addTask`, `btnText`], `span`, `New Task`, `newTaskBtn`);
        createElement([`taskContainer`], `div`, ``, `mainBody`);


    createElement([`footer`], `div`, ``, `content`);
        createElement([`signature`], `div`, `Kbouti 2023`, `footer`);
}



export default buildPage;