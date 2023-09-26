

function domTest1() {
    console.log(`dom Test1`);
};


function domTest2() {
    console.log(`dom Test2`);
};

function domTest3(){
    console.log(`dom Test 3`)
};

export {
    domTest1,
    domTest2,
    domTest3
}

//  What's going on here?? If I remove "default" from test function 2, or if I include "default" in the statement for test 1 or 3, the whole thing crashes. 
//  As is, the site doesn't crash, but neither test 1 or 3 log their event in the console. What's going on with the default statement and more importantly what do I have to do to export multiple functions?

















// function domManipulator(projectList){

// function toggleDisplay(id, standardDisplay){
//     const element = document.getElementById(id);
//     const elementDisplayValue = window.getComputedStyle(element).getPropertyValue(`display`);
//     if(elementDisplayValue == standardDisplay){
//         element.style.display = 'none'
//         return;
//     }
//     element.style.display = standardDisplay;
//     return;

// }


// function addEventListeners(projectList){
//     const newProjectBtn = document.getElementById(`newProjectBtn`);
//         newProjectBtn.addEventListener(`click`, function(){
//         toggleDisplay(`projectFormDiv`, `flex`)
//         })

//     const newTaskBtn = document.getElementById(`newTaskBtn`);
//         newTaskBtn.addEventListener(`click`, function(){
// //populate dropdown menu with current projects:
//         let option = ``;
//         for(let i = 0; i < projectList.length; i++){
//             option += `<option value=${projectList[i].name}>` + projectList[i].name+"</option>"
//         }
//         projectDropDown.innerHTML = option;
//         toggleDisplay(`taskFormDiv`, `flex`)
//     })


//     const newProjectCancelButton = document.getElementById(`newProjectCancelButton`);
//     newProjectCancelButton.addEventListener(`click`, function(){
//         this.form.reset();
//         toggleDisplay(`projectFormDiv`, `flex`);
//     })
//     const newTaskCancelButton = document.getElementById(`newTaskCancelButton`);
//     newTaskCancelButton.addEventListener(`click`, function(){
//         this.form.reset();
//         toggleDisplay(`taskFormDiv`, `flex`);
//     })





//     const projectForm = document.getElementById(`projectForm`);
//     projectForm.addEventListener(`submit`, function(event){
//         event.preventDefault();
//         const projectNameInput = document.getElementById(`projectNameInput`);
//         const newProject = new Project(projectNameInput.value, `no`, []);
//         projectList.push(newProject);

//         //the following code should be broken down into a separate and smaller chunks?

//         const newElement = document.createElement(`div`);
//             // newElement.setAttribute(`id`, `${projectNameInput.value}`);
//             //removed id declaration to avoid poluting global scope
//             newElement.classList.add(`project`);
//             newElement.innerHTML = projectNameInput.value;
//             projectContainer = document.getElementById(`projectContainer`);
//             projectContainer.appendChild(newElement);
//             const projectDeleteButton = document.createElement(`div`);
//             projectDeleteButton.classList.add(`projectDeleteButton`);
//             projectDeleteButton.innerHTML = "X";
//             newElement.appendChild(projectDeleteButton);
//         toggleDisplay(`projectFormDiv`, `flex`);
//         projectForm.reset();
//     })

//     const taskForm = document.getElementById(`taskForm`);
//     taskForm.addEventListener(`submit`, function(event){
//         event.preventDefault();
//         const projectDropDown = document.getElementById(`projectDropDown`);
//         const taskNameInput = document.getElementById(`taskNameInput`);
//         const taskDescriptionInput = document.getElementById(`taskDescriptionInput`);
//         const urgencyDropDown = document.getElementById(`urgencyDropDown`);
//         const statusDropDown = document.getElementById(`statusDropDown`);

//         const newTask = new Task(projectDropDown.value, taskNameInput.value, taskDescriptionInput.value, urgencyDropDown.value, statusDropDown.value);
//         for (let i = 0; i < projectList.length;i++){
//             if ( projectList[i].name == projectDropDown.value){
//                     projectList[i].contents.push(newTask);
//             }
//         }
//         //^Adds the task to the correct project

//         makeTaskCard(newTask, projectList);

//         toggleDisplay(`taskFormDiv`, `flex`);
//         taskForm.reset();
//     })
    
// }



// function makeTaskCard(task, projectList){
//     console.log(projectList)
//     console.log(task);

//             const taskElement = document.createElement(`div`);
//             taskElement.classList.add(`task`);

//             const taskCardLeft = document.createElement(`div`);
//             const taskCardRight = document.createElement(`div`);
//             taskCardLeft.classList.add(`taskCardLeft`);
//             taskCardRight.classList.add(`taskCardRight`);
//             taskElement.appendChild(taskCardLeft);
//             taskElement.appendChild(taskCardRight);

//             const projectContainer = document.createElement(`div`);
//                 projectContainer.classList.add(`taskSectionContainer`);
//                 taskCardLeft.appendChild(projectContainer);
//                 const projectLabel = document.createElement(`div`);
//                     projectLabel.classList.add(`taskAttributeLabel`);
//                     projectLabel.innerHTML = `Project: `
//                     projectContainer.appendChild(projectLabel);
//                 const projectValue = document.createElement(`div`);
//                     projectValue.classList.add(`taskName`);
//                     projectValue.innerHTML = task.project;
//                     projectContainer.appendChild(projectValue);


//             const nameContainer = document.createElement(`div`);
//                 nameContainer.classList.add(`taskSectionContainer`);
//                 taskCardLeft.appendChild(nameContainer);  
//                 const nameLabel = document.createElement(`div`);
//                     nameLabel.classList.add(`taskAttributeLabel`);
//                     nameLabel.innerHTML = `Task Name: `
//                     nameContainer.appendChild(nameLabel);
//                 const taskName = document.createElement(`div`);
//                     taskName.classList.add(`taskName`);
//                     taskName.innerHTML = task.name;
//                     nameContainer.appendChild(taskName);

//             const descriptionContainer = document.createElement(`div`);
//                 descriptionContainer.classList.add(`taskSectionContainer`);
//                 taskCardRight.appendChild(descriptionContainer);  
//                 const descriptionLabel = document.createElement(`div`);
//                     descriptionLabel.classList.add(`taskAttributeLabel`);
//                     descriptionLabel.innerHTML = `Task Description: `
//                     descriptionContainer.appendChild(descriptionLabel);
//                 const taskDescription = document.createElement(`div`);
//                     taskDescription.classList.add(`taskDescription`);
//                     taskDescription.innerHTML = task.description;
//                     descriptionContainer.appendChild(taskDescription);
                    








//             const urgencyContainer = document.createElement(`div`);
//                 urgencyContainer.classList.add(`taskSectionContainer`);
//                 taskCardLeft.appendChild(urgencyContainer);  
//                 const urgencyLabel = document.createElement(`div`);
//                     urgencyLabel.classList.add(`taskAttributeLabel`);
//                     urgencyLabel.innerHTML = `Urgency: `
//                     urgencyContainer.appendChild(urgencyLabel);
//                 const taskUrgency = document.createElement(`div`);
//                     taskUrgency.classList.add(`taskUrgency`);
//                     taskUrgency.innerHTML = task.urgency;
//                     urgencyContainer.appendChild(taskUrgency);

//                 if (checkUrgency(task) ==  `HIGH`){
//                     taskUrgency.classList.add(`highUrgency`);
//                 }
//                 else if (checkUrgency(task) ==  `Mid`){
//                     taskUrgency.classList.add(`midUrgency`);
//                 }
//                 else if (checkUrgency(task) ==  `Low`){
//                     taskUrgency.classList.add(`lowUrgency`);
//                 }


//             const statusContainer = document.createElement(`div`);
//                 statusContainer.classList.add(`taskSectionContainer`);
//                 taskCardLeft.appendChild(statusContainer);
//                 const statusLabel = document.createElement(`div`);
//                     statusLabel.classList.add(`taskAttributeLabel`);
//                     statusLabel.innerHTML = `Status: `;
//                     statusContainer.appendChild(statusLabel);
//                 const taskStatus = document.createElement(`div`);
//                     taskStatus.classList.add(`taskStatus`);
//                     taskStatus.innerHTML = task.status;
//                     statusContainer.appendChild(taskStatus);

    


//         const taskContainer = document.getElementById(`taskContainer`);
//         taskContainer.appendChild(taskElement);
        
// }


// function checkUrgency(task){
//     let urgency = task.urgency;
//     return urgency;
// }


//  return;   
// }

// export default domManipulator;