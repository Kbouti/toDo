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
        const newProject = new Project(projectNameInput.value, `no`, []);
        projectList.push(newProject);
        const newElement = document.createElement(`div`);
            newElement.setAttribute(`id`, `${projectNameInput.value}`);
            newElement.classList.add(`project`);
            newElement.innerHTML = projectNameInput.value;
            projectsContainer = document.getElementById(`projectsContainer`);
            projectsContainer.appendChild(newElement);
        toggleDisplay(`projectFormDiv`, `flex`);
        projectForm.reset();
    })

    const taskForm = document.getElementById(`taskForm`);
    taskForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        const taskNameInput = document.getElementById(`taskNameInput`);
        const newTaskName = taskNameInput.value;
        console.log(newTaskName);

    })
}


module.exports = {
    toggleDisplay,
    addEventListeners
}