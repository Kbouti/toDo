import './style.css';


function component() {
    const element = document.createElement(`div`);
    element.innerHTML = 'To Do List';
    element.classList.add(`hello`);
    return element;
}

document.body.appendChild(component());


function createElement(id){
    const element = document.createElement(`div`);
    element.setAttribute(`id`, `${id}`);
    element.innerHTML = `something`;
    if (arguments.length > 1){
        for (let i = 1; i < arguments.length; i++ ){
            element.classList.add(`${arguments[i]}`)
        }
    }
    return element;
}

function populateElement(element, content){
    element.innerHTML = content;
    return element;
}

function placeElement(element, location){
    const locationDiv = document.getElementById(`${location}`);
    locationDiv.appendChild(element);
    return;
}


function enchilada(array, content, location){
    let element = createElement(array);
    populateElement(element, content);
    placeElement(element,location);
}

console.log(`something else`);

enchilada([`kevin`, `frederick`, `boutilier`], "I can't believe it mother fucking worked", "content")




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