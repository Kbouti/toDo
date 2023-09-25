const projectManager = require(`./projectManager.js`);
const Task = projectManager.Task;
const Project = projectManager.Project;



export function testFunction(projectList){
    console.log(`something happened`);
    const newTaskSubmitButton = document.getElementById(`newTaskSubmitButton`);
newTaskSubmitButton.addEventListener(`click`, function(){
    console.log(projectList);

})}


// export default testFunction;
//make task card function here instead of dom manipulator