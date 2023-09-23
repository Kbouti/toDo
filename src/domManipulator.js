const projectManager = require(`./projectManager.js`);
const Task = projectManager.Task;
const Project = projectManager.Project;


// import testFunction from './taskCards';



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
            option += `<option value=${projectList[i].name}>` + projectList[i].name+"</option>"
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

        //the following code should be broken down into a separate and smaller chunks?

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
        const taskDescriptionInput = document.getElementById(`taskDescriptionInput`);
        const urgencyDropDown = document.getElementById(`urgencyDropDown`);
        const statusDropDown = document.getElementById(`statusDropDown`);

        const newTask = new Task(projectDropDown.value, taskNameInput.value, taskDescriptionInput.value, urgencyDropDown.value, statusDropDown.value);
        for (let i = 0; i < projectList.length;i++){
            if ( projectList[i].name == projectDropDown.value){
                    projectList[i].contents.push(newTask);
            }
        }
        //^Adds the task to the correct project


        //Creates the task element and adds to the dom:
        //This code should be simplified elesewhere and exported
        // const taskElement = document.createElement(`div`);
        //     taskElement.classList.add(`task`);

        //     const projectContainer = document.createElement(`div`);
        //         projectContainer.classList.add(`taskSectionContainer`);
        //         taskElement.appendChild(projectContainer);
        //         const projectLabel = document.createElement(`div`);
        //             projectLabel.classList.add(`taskAttributeLabel`);
        //             projectLabel.innerHTML = `Project:`
        //             projectContainer.appendChild(projectLabel);
        //         const projectValue = document.createElement(`div`);
        //             projectValue.classList.add(`taskName`);
        //             projectValue.innerHTML = projectDropDown.value;
        //             projectContainer.appendChild(projectValue);

        //     const nameContainer = document.createElement(`div`);
        //         nameContainer.classList.add(`taskSectionContainer`);
        //         taskElement.appendChild(nameContainer);  
        //         const nameLabel = document.createElement(`div`);
        //             nameLabel.classList.add(`taskAttributeLabel`);
        //             nameLabel.innerHTML = `Task Name:`
        //             nameContainer.appendChild(nameLabel);
        //         const taskName = document.createElement(`div`);
        //             taskName.classList.add(`taskName`);
        //             taskName.innerHTML = taskNameInput.value;
        //             nameContainer.appendChild(taskName);

        //     const descriptionContainer = document.createElement(`div`);
        //         descriptionContainer.classList.add(`taskSectionContainer`);
        //         taskElement.appendChild(descriptionContainer);  
        //         const descriptionLabel = document.createElement(`div`);
        //             descriptionLabel.classList.add(`taskAttributeLabel`);
        //             descriptionLabel.innerHTML = `Task Description:`
        //             descriptionContainer.appendChild(descriptionLabel);
        //         const taskDescription = document.createElement(`div`);
        //             taskDescription.classList.add(`taskDescription`);
        //             taskDescription.innerHTML = taskDescriptionInput.value;
        //             descriptionContainer.appendChild(taskDescription);


            // const taskUrgency = document.createElement(`select`);
            //     taskUrgency.classList.add(`taskUrgency`);
            //     let urgencyOption = '';
            //     let urgency = [`HIGH`, `Mid`, `Low`];
            //     for(let i = 0; i < urgency.length; i++){
            //         urgencyOption += '<option value="'+urgency[i] + '">' + urgency[i]+"</option>"
            //     }
            //     taskUrgency.innerHTML = urgencyOption;
            //     // urgencyDropDown.selectedIndex = ;   need to figure out how to use input to apply selected to dropdown





        //         // taskUrgency.innerHTML = urgencyDropDown.value;


        //         taskElement.appendChild(taskUrgency);
        //      const taskStatus = document.createElement(`div`);
        //         taskStatus.classList.add(`taskStatus`);
        //         taskStatus.innerHTML = statusDropDown.value;
        //         taskElement.appendChild(taskStatus);
        // const taskContainer = document.getElementById(`taskContainer`);
        //     taskContainer.appendChild(taskElement);
        makeTaskCard(newTask, projectList);

        toggleDisplay(`taskFormDiv`, `flex`);
        taskForm.reset();
    })
    
}


module.exports = {
    toggleDisplay,
    addEventListeners
}



function makeTaskCard(task, projectList){
    console.log(projectList)
    console.log(task);

            const taskElement = document.createElement(`div`);
            taskElement.classList.add(`task`);

            const taskCardLeft = document.createElement(`div`);
            const taskCardRight = document.createElement(`div`);
            taskCardLeft.classList.add(`taskCardLeft`);
            taskCardRight.classList.add(`taskCardRight`);
            taskElement.appendChild(taskCardLeft);
            taskElement.appendChild(taskCardRight);

            const projectContainer = document.createElement(`div`);
                projectContainer.classList.add(`taskSectionContainer`);
                taskCardLeft.appendChild(projectContainer);
                const projectLabel = document.createElement(`div`);
                    projectLabel.classList.add(`taskAttributeLabel`);
                    projectLabel.innerHTML = `Project:`
                    projectContainer.appendChild(projectLabel);
                const projectValue = document.createElement(`div`);
                    projectValue.classList.add(`taskName`);
                    projectValue.innerHTML = task.project;
                    projectContainer.appendChild(projectValue);


                const nameContainer = document.createElement(`div`);
                    nameContainer.classList.add(`taskSectionContainer`);
                    taskCardLeft.appendChild(nameContainer);  
                const nameLabel = document.createElement(`div`);
                    nameLabel.classList.add(`taskAttributeLabel`);
                    nameLabel.innerHTML = `Task Name:`
                    nameContainer.appendChild(nameLabel);
                const taskName = document.createElement(`div`);
                    taskName.classList.add(`taskName`);
                    taskName.innerHTML = task.name;
                    nameContainer.appendChild(taskName);

                const descriptionContainer = document.createElement(`div`);
                    descriptionContainer.classList.add(`taskSectionContainer`);
                    taskCardRight.appendChild(descriptionContainer);  
                const descriptionLabel = document.createElement(`div`);
                    descriptionLabel.classList.add(`taskAttributeLabel`);
                    descriptionLabel.innerHTML = `Task Description:`
                    descriptionContainer.appendChild(descriptionLabel);
                const taskDescription = document.createElement(`div`);
                    taskDescription.classList.add(`taskDescription`);
                    taskDescription.innerHTML = task.description;
                    descriptionContainer.appendChild(taskDescription);

                const taskUrgency = document.createElement(`select`);
                    taskUrgency.classList.add(`taskUrgency`);
                    let urgencyOption = '';
                    let urgency = [`HIGH`, `Mid`, `Low`];
                    for(let i = 0; i < urgency.length; i++){
                        urgencyOption += '<option value="'+urgency[i] + '">' + urgency[i]+"</option>"
                    }
                    taskUrgency.innerHTML = urgencyOption;
                    // urgencyDropDown.selectedIndex = ;   need to figure out how to use input to apply selected to dropdown
    
    


        const taskContainer = document.getElementById(`taskContainer`);
        taskContainer.appendChild(taskElement);
        
}