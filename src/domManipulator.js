function toggleDisplay(id, standardDisplay){
    const element = document.getElementById(id);
    const elementDisplayValue = window.getComputedStyle(element).getPropertyValue(`display`);
    if(elementDisplayValue == standardDisplay){
        element.style.display = 'none'
        return;
    }
    element.style.display = standardDisplay;
    return;

}


function addEventListeners(){
    const newProjectBtn = document.getElementById(`newProjectBtn`);
    newProjectBtn.addEventListener(`click`, function(){
    toggleDisplay(`projectFormDiv`, `flex`)
    })

    const newTaskBtn = document.getElementById(`newTaskBtn`);
    newTaskBtn.addEventListener(`click`, function(){
    toggleDisplay(`taskFormDiv`, `flex`)
    })
}


module.exports = {
    toggleDisplay,
    addEventListeners
}