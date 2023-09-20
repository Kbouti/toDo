const projectManager = require(`./projectManager.js`);
const Task = projectManager.Task;
const Project = projectManager.Project;



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


function addEventListeners(projectList){
    const newProjectBtn = document.getElementById(`newProjectBtn`);
        newProjectBtn.addEventListener(`click`, function(){
        toggleDisplay(`projectFormDiv`, `flex`)
        })

    const newTaskBtn = document.getElementById(`newTaskBtn`);
        newTaskBtn.addEventListener(`click`, function(){
//populate dropdown menu with current projects:
        let option = ``;
        for(let i = 0; i < projectList.length; i++){
            option += `<option value=${projectList[i].name}">` + projectList[i].name+"</option>"
        }
        projectDropDown.innerHTML = option;
        toggleDisplay(`taskFormDiv`, `flex`)
    })


    const newProjectCancelButton = document.getElementById(`newProjectCancelButton`);
    newProjectCancelButton.addEventListener(`click`, function(){
        this.form.reset();
        toggleDisplay(`projectFormDiv`, `flex`);
    })
    const newTaskCancelButton = document.getElementById(`newTaskCancelButton`);
    newTaskCancelButton.addEventListener(`click`, function(){
        this.form.reset();
        toggleDisplay(`taskFormDiv`, `flex`);
    })





    const projectForm = document.getElementById(`projectForm`);
    projectForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        
        const projectNameInput = document.getElementById(`projectNameInput`);
        
        const newProject = new Project(projectNameInput.ariaValueMax, `no`, []);
        projectList.push(newProject)
        toggleDisplay(`projectFormDiv`, `flex`);

        // const newProject = projectNameInput.value;
        // console.log(`the name of the new project is ${newProject}`);
        //need function for project creation
    })






    const newProjectSubmitButton = document.getElementById(`newProjectSubmitButton`);
        newProjectSubmitButton.addEventListener(`click`, function(){
            console.log(`The submit button has been clicked`);
        })

}


module.exports = {
    toggleDisplay,
    addEventListeners
}