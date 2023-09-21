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
            // newElement.setAttribute(`id`, `${projectNameInput.value}`);
            //removed id declaration to avoid poluting global scope
            newElement.classList.add(`project`);
            newElement.innerHTML = projectNameInput.value;
            projectContainer = document.getElementById(`projectContainer`);
            projectContainer.appendChild(newElement);
            const projectDeleteButton = document.createElement(`div`);
            projectDeleteButton.classList.add(`projectDeleteButton`);
            projectDeleteButton.innerHTML = "X";
            newElement.appendChild(projectDeleteButton);
        toggleDisplay(`projectFormDiv`, `flex`);
        projectForm.reset();
    })

    const taskForm = document.getElementById(`taskForm`);
    taskForm.addEventListener(`submit`, function(event){
        event.preventDefault();
        const projectDropDown = document.getElementById(`projectDropDown`);
        const taskNameInput = document.getElementById(`taskNameInput`);
        const taskDescriptionInput = document.getElementById(`taskNameInput`);
        const urgencyDropDown = document.getElementById(`urgencyDropDown`);
        const statusDropDown = document.getElementById(`statusDropDown`);

        const newTask = new Task(projectDropDown.value, taskNameInput.value, taskDescriptionInput.value, urgencyDropDown.value, statusDropDown.value);
        for (let i = 0; i < projectList.length;i++){
            if ( projectList[i].name + '"' == projectDropDown.value){
                    projectList[i].contents.push(newTask);
            }
        }
        //^Adds the task to the correct project


        //Creates the task element and adds to the dom:
        const taskElement = document.createElement(`div`);
            taskElement.classList.add(`task`);
            const taskName = document.createElement(`div`);
                taskName.classList.add(`taskName`);
                taskName.innerHTML = taskNameInput.value;
                taskElement.appendChild(taskName);
            const taskUrgency = document.createElement(`div`);
                taskUrgency.classList.add(`taskName`);
                taskUrgency.innerHTML = urgencyDropDown.value;
                taskElement.appendChild(taskUrgency);
             const taskStatus = document.createElement(`div`);
                taskStatus.classList.add(`taskName`);
                taskStatus.innerHTML = statusDropDown.value;
                taskElement.appendChild(taskStatus);
        const taskContainer = document.getElementById(`taskContainer`);
            taskContainer.appendChild(taskElement);


        toggleDisplay(`taskFormDiv`, `flex`);
        taskForm.reset();
    })
    
}


module.exports = {
    toggleDisplay,
    addEventListeners
}