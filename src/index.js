import './style.css';

// run "npm start" in terminal to watch project.
// "control+c" to close, or kill terminal.





function makeEl(array, type){
    const element = document.createElement(`${type}`);
    let id = array[0];

    element.setAttribute(`id`, `${id}`);
    element.innerHTML = `something`;
    if (array.length > 1){
        for (let i = 1; i < array.length; i++ ){
            element.classList.add(`${array[i]}`)
        }
    }
    return element;
}

function populateEl(element, content){
    element.innerHTML = content;
    return element;
}

function placeEl(element, location){
    const locationDiv = document.getElementById(`${location}`);
    locationDiv.appendChild(element);
    return;
}


function createElement(array, type, content, location){
    let element = makeEl(array, type);
    populateEl(element, content);
    placeEl(element,location);
}
//  Create element takes 4 arguments:
//  1. Array containing first the id, then any class attributes.
//  2. A string indicating the type of the new element    'div'
//  3. A string containing the innerhtml content.
//  4. A string containing the id of the element you'd like to append the new element to. The main container is #content.

createElement([`kevin`, `frederick`, `boutilier`], `div`, "I can't believe it friggin worked", "content")
createElement(['sassy', 'boutilier'], 'div', 'Another sentence up on the mafuckin screen', 'content')



// newElement(`sassy`);
// newElement(`kevin`, `frederick`, `boutilier`);



//create the div (with id and maybe class)
//put something in it
//put it where we want it to go


//class constructor to make divs
//homepage dom element loading
//class constructor to make tasks
//projects to organize tasks
//ui to manipulate tasks