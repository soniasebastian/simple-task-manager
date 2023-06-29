// Import Express.js
const express = require('express');

// Initialize an instance of Express.js
const app = express ();

// Specify on which port the Express.js server will run
const port = 3001;

// middleware
app.use(express.json());

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(port, () =>{
    console.log(`Successfully running on port ${port}`)
})

