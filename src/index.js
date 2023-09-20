// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.


// In order to push changes to live site on github pages, run the following command:
//git subtree push --prefix dist origin gh-pages




import './style.css';
import buildPage from './homepage';
import generateForms from './forms';


const projectManager = require(`./projectManager.js`);
const Task = projectManager.Task;
const Project = projectManager.Project;
const projectList = projectManager.projectList;

const domManipulator = require(`./domManipulator.js`)
const toggleDisplay = domManipulator.toggleDisplay;
const addEventListeners = domManipulator.addEventListeners;


buildPage();
generateForms();
addEventListeners(projectList);



const task1 = new Task(`Car`, `Roof Bike Rack`, `Mount fork clamp on roof rack. Need brackets to secure fork mount to roof rails`, `low`, `need parts`);


