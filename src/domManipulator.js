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
// let projects = [`car`, `bike`, `guns`];


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
            //option += '<option value="'+projectList[i] + '">' + projectList[i]+"</option>"

            option += `<option value=${projectList[i]}">` + projectList[i]+"</option>"
                //

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
    projectForm.addEventListener(`submit`, function(){

        //need function for project creation

    })
}


module.exports = {
    toggleDisplay,
    addEventListeners
}