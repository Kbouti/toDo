



// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.


import './style.css';
import buildPage from './homepage';
const taskConstructor = require(`./taskConstructor.js`);
const Task = taskConstructor.Task;
const Project = taskConstructor.Project;


buildPage();



const task1 = new Task(`Car`, `Roof Bike Rack`, `Mount fork clamp on roof rack. Need brackets to secure fork mount to roof rails`, `low`, `need parts`);
console.log(task1);

