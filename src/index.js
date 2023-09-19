// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.


// In order to push changes to live site on github pages, run the following command:
//git subtree push --prefix dist origin gh-pages




import './style.css';
import buildPage from './homepage';
import generateForms from './forms';


const taskConstructor = require(`./taskConstructor.js`);
const Task = taskConstructor.Task;
const Project = taskConstructor.Project;

const domManipulator = require(`./domManipulator.js`)
const toggleDisplay = domManipulator.toggleDisplay;
const addEventListeners = domManipulator.addEventListeners;

let projects = [`car`, `bike`, `guns`];

buildPage();
generateForms();
addEventListeners(projects);



const task1 = new Task(`Car`, `Roof Bike Rack`, `Mount fork clamp on roof rack. Need brackets to secure fork mount to roof rails`, `low`, `need parts`);
console.log(task1.project)


task1.log()


console.log(`something cool`);