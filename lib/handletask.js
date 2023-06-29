//Imports the task class
const task = require('../lib/task');


//array to store the tasks initialised as empty
let tasks = [ ];


//handles the route for getting all tasks and send json response
function getAllTasks(req, res){
    res.json(tasks);
}


//get tasks by ID for handling route
function getTaskByID(req, res) {
    const taskId = req.params.id;
    const Task = tasks.find((t) => t.id === taskId);


// if matching task with ID found sends the task a JSON response or a 404 status with error message
    if (Task) { res.json(Task);
    } else 
    {res.status(404).json({error:'Task not found'});
    }
}


//function handles the route for creating new task
function createTask(req, res) {
//extracts data from request body
    const { title, description, date } = req.body;

// generates an id by converting current timestamp to a string
    const id = Date.now().toString();
    const completed = false;


//creates a new Task using extarcted data and generated ID and push it to new array and sends 201 with created task as JSON response.
    const Task = new task(id, title, description, date, completed);
    tasks.push(Task);
    res.status(201).json(Task);
}


// handles route for amending the existing task
function amendTask(req, res) {
    const taskId = req.params.id;
    const { title, description, date } = req.body;

// finds task object with a matching Id using the find array method
    const Task = tasks.find((t) => t.id === taskId);


//if task found updates the properties and sends response either JSON or 404 error message
    if (Task) {
        if (title){
            Task.amendTitle(title);
        }
        if (description) {
            Task.amendDescription(description);
        }
        if (date) {
            Task.amendDate(date);
        }
        res.json(Task);
    }else{
        res.status(404).json({error: 'Task not found'});
    }
}


//function handles the route for deleting an existing task
function deleteTask (req, res) {
    const taskId = req.params.id;

// finds the index of the task with a matching id using findindex array method
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

// if task found with index not -1, it removes the task using splice  and retrieves deleted task and sends response.
    if(taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1)[0];
        res.json(deletedTask);    
    }else {
        res.status(404).json({error: 'Task not found'});
    }    
}


//exports 
module.exports = {getAllTasks, getTaskByID, createTask, amendTask, deleteTask};