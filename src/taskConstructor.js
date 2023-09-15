class Project {
    constructor(title,canDelete){
        this.title = title;
        this.canDelete = canDelete;
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

    constructor(project, title, description, urgency, status){
        this.project = project;
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
    }

    log(){
        console.log(this);
    }

}


module.exports = {
    Task,
    Project
}