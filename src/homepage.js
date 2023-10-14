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
            let projectBtn = createElement([`newProjectButton`, `addBtn`], `div`, ``);
                placeElement(projectBtn, `sidebar`);
                let addGraphic = createElement([`addGraphic`, `material-symbols-outlined`], `span`, `add`)
                    placeElement(addGraphic, `newProjectButton`);
                let addProject = createElement([`addProject`, `btnText`], `span`, `New Project`);
                    placeElement(addProject, `newProjectButton`);
            let projectContainer = createElement([`projectContainer`], `div`, ``);
                placeElement(projectContainer,`sidebar`);
        let mainBody = createElement([`mainBody`], `div`, ``);
            placeElement(mainBody, `body`);
            let bodyTitle = createElement([`bodyTitle`, `title`], `div`, `Tasks`);
                placeElement(bodyTitle, `mainBody`);
            let newTaskButton = createElement([`newTaskButton`, `addBtn`], `div`, ``);
                placeElement(newTaskButton, `mainBody`);
                let addGraphic2 = createElement([`addGraphic2`, `material-symbols-outlined`], `span`, `add`);
                    placeElement(addGraphic2, `newTaskButton`);
                let addTask = createElement([`addTask`, `btnText`], `span`, `New Task`);
                    placeElement(addTask, `newTaskButton`);
            let taskContainer = createElement([`taskContainer`], `div`, ``);
                placeElement(taskContainer, `mainBody`);
    let footer = createElement([`footer`], `div`, ``);
        placeElement(footer, `content`);
        let signature = createElement([`signature`], `div`, `Kbouti 2023`);
            placeElement(signature, `footer`);
}



export {buildPage}