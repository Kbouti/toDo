//div creation function:

//  Create element takes 4 arguments:
//  1. Array containing first the id, then any class attributes.
//  2. A string indicating the type of the new element    'div'
//  3. A string containing the innerhtml content.
//  4. A string containing the id of the element you'd like to append the new element to. The main container is #content.


function makeEl(array, type){
    const element = document.createElement(`${type}`);
    let id = array[0];
    element.setAttribute(`id`, `${id}`);
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


export default createElement;
