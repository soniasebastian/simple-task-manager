// Import Express.js
const express = require('express');
const handleTask = require('./lib/handletask.js');

// Initialize an instance of Express.js
const app = express ();

// Specify on which port the Express.js server will run
const port = 3001;

// middleware
app.use(express.json());

// Routes
app.get('/tasks', handleTask.getAllTasks);
app.get('/tasks/:id', handleTask.getTaskByID);
app.post('/tasks', handleTask.createTask);
app.put('/tasks/:id', handleTask.amendTask);
app.delete('/tasks/:id', handleTask.deleteTask);



// listen() method is responsible for listening for incoming connections on the specified port
app.listen(port, () =>{
    console.log(`Successfully running on port ${port}`)
})

