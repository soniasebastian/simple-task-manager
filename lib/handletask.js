const task = require('.../lib/task');

let tasks = [ ];

function getAllTasks(req, res){
    res.json(tasks);
}