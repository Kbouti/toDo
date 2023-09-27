// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.


// In order to push changes to live site on github pages, run the following command:
//git subtree push --prefix dist origin gh-pages




import './style.css';
import buildPage from './homepage';
import generateForms from './forms';


import {domTest1, domTest2, domTest3} from './domManipulator';
import {Project, Task} from './projectManager';

domTest1();
domTest2();
domTest3();

let projectList = [];
let currentProject;
let currentTask;


    //establish variables needed for eventlisteners and dom manipulation. 
    //write functions in respective modules
    //call functions with relevant variables in index.js

buildPage();
generateForms();




// addEventListeners(projectList);


// testFunction(projectList);

// let project1 = new Project(`Misc`, `no`, []);
// projectList.push(project1);
// const miscProject = document.createElement(`div`);
//     miscProject.classList.add(`project`);
//     miscProject.innerHTML = `Misc`;
//     projectContainer = document.getElementById(`projectContainer`);
//     projectContainer.appendChild(miscProject);


console.log(`index.js loaded`);

// const task1 = new Task(`Car`, `Roof Bike Rack`, `Mount fork clamp on roof rack. Need brackets to secure fork mount to roof rails`, `low`, `need parts`);


