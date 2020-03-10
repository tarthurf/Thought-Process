// requiring neccessary packages
const express = require('express');
const fs = require('fs');
const path = require('path');

// set port
const PORT = 3000;

// define express app
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// set route paths
// route for index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

// route for api/notes
app.get('/api/notes', (req, res) => {
    return res.json('Develop\db\db.json'); //TODO: Look up res.json from different directory
});

// Create post request for new note
app.post('/api/notes:id', (req, res) => {
    
})
// attach unique id to new notes (date object?)

// append new note to db.json

// return new note

// create note delete function

// Turn on server
app.listen(PORT, () => {
    console.log('App lsitening to port ' + PORT);
});