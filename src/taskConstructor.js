class Project {

}

class Task {

    constructor(project, title, description, urgency, status){
        this.project = project;
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
    }

}

let task1 = new Task(`car`, `Roof Bike Rack`, `Mount fork mount on roof rack. Need brackets to secure fork mount to roof rails`, `low`, `need parts`);

console.log(task1)


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a-b;
}

module.exports = {
    add,
    subtract
}