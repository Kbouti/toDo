
let projectList = [];


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

let project1 = new Project(`Misc`, `no`, []);
let project2 = new Project(`cars`, `yes`, []);

projectList.push(project1, project2);




module.exports = {
    Task,
    Project,
    projectList
}