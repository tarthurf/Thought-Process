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

// set paths
const uniqueId = Date.now();
const noteArray = [];

// route for index
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'Develop/public' });
});

// route for notes
app.get('/notes', (req, res) => {
    res.sendFile('notes.html', { root: 'Develop/public' });
});

// route for api/notes
app.get('/api/notes', (req, res) => {

    let jsonNotes = fs.readFileSync(path.join(__dirname, '/Develop/db/db.json'), 'utf8')
    return res.json(jsonNotes);
});

app.post('/api/notes', (req, res) => {
    // attach unique id to new notes (date object?)
    // const newNote = req.body;

    noteObject = {
        title : req.body.title,
        text: req.body.text,
        ID: uniqueId
    }
    noteObject ? noteArray.unshift(noteObject) : console.error();
    
    
    fs.writeFileSync(path.join(__dirname, '/Develop/db/db.json'), JSON.stringify(noteArray));

    console.log(noteObject);

    res.json(noteObject);
    
    // append new note to db.json
    
    // return new note
    
    // create note delete function


});

// Create post request for new note
app.post('/api/notes:id', (req, res) => {

    
})

console.log(fs.readFileSync(path.join(__dirname, '/Develop/db/db.json'), 'utf8'))

// Turn on server
app.listen(PORT, () => {
    console.log('App lsitening to port ' + PORT);
    console.log('The time is: ' + uniqueId);
});