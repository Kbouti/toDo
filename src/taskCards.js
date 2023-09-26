
export default function taskTest1(){
    console.log(`tasktest1`);
    return;
}







// I'm working on the To Do List project and running into webpack troubles. I got into the project enough where the user could create a project and create tasks within that project, but I'm struggling with the code organization part more than anything. 
// My main problem is I can't seem to export multiple elements from a single module? I wanted to create both my project and task constructors in one module and export, but I couldn't do that using "export default (function)"
// I made it work using: module.exports{class1, class2} but then ran into issues with an error stating a can't mix ESM syntax with ESM6. 


// I feel like I'm doing something wrong with webpack because it seems to be making it more difficult to organize my code not easier.  I find myself combining small functions into one big one so that I can export, and that doesn't feel right. 
// I'm trying to go back in my project and get my organization and exports straight and my main problem is:
//  "why can't I export multiple functions from the same module?"

// Looking at my src/domManipulator.js file I wrote three test functions that should export to index.js. I can only get  one to work at a time. 

