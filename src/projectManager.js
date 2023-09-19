let projectList = [``];


class Project {
    constructor(name, canDelete, contents){
        this.name = name;
        this.canDelete = canDelete;
        this.contents = contents;
    }

    delete(){
        //to delete this project and all tasks it contains. Cannot be performed on the default "misc" project.
        if (this.canDelete = true){
        }
    }
    clearContents(){
        //to remove all tasks from this project
    }

    // appendToList(){
    //     projectList.push(Project);
    // }
}



class Task {
    constructor(project, name, description, urgency, status){
        this.project = project;
        this.name = name;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
    }
    log(){
        console.log(this);
    }
}

console.log(projectList);


let project1 = new Project(`Misc`, `no`, ``);
console.log(project1);
projectList.push(project1);
console.log(projectList);

//this seems to be working, but project is an object


module.exports = {
    Task,
    Project,
    projectList
}