import './style.css';

import buildPage from './homepage';

buildPage();

// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.






//class constructor to make divs
//homepage dom element loading
//class constructor to make tasks
//projects to organize tasks
//ui to manipulate tasks



const taskConstructor = require(`./taskConstructor.js`);

const result1 = taskConstructor.add(5, 3);
const result2 = taskConstructor.subtract(70, 1);

console.log(result1);
console.log(result2);

