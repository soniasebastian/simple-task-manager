class task {
    constructor(id, title, description, date, completed) {
        this.id = id;
        this.title = title;
        this.decription = description;
        this.date = date;
        this.completed = completed;
    }

    amendTitle(newTitle) {
        this.title = newTitle;
    }

    amendDescription(newDescription) {
        this.decription = newDescription;
    }

    amendDate(newDate){
        this.date = newDate;
    }

    markCompleted(){
        this.completed = true;
    }

}

module.exports = task;
