// implement your API here
const express = require('express');
const db = require('./data/db');


const server = express();

server.listen(8000, () => {
    console.log('server listening on port 8000')
});

server.get('/', (req, res) => {
    res.send('welcome to the homepage')
})

//GET API ENDPOINTS FROM README
// find ()- returns all users 
server.get('/api/users', (req, res) => {
    db.find()
        //if users, return them with helpful status
        .then(users => {
            res.status(200).json({ users })
        })
        //if no users, return an error
        .catch(err => {
            res.status(500).json({ error: 'no users found' });
        })
})
//Find by id- returns a single user with ID parameter
server.get('/api/users/:id', (req, res) => {
    //set parameter to a variable
    const userId = req.params.id;
    //pass variable to findById
    db.findById(userId)
    //send back the info
    .then( user => {
        res.status(200).json({user})
    })
    //or send back an error
    .catch(err => {
        res.status(500).json({error: 'no user with that id found'})
    })
})

// insert - adds another user to the database
server.post('/api/users', (req, res) => {
    const user = {};
    db.insert()
    .then()
    .catch( err => {
        res.status(500).json({ error: 'cannot add new user' })
    })
})

// update- finds user by id then updates the user's information
server.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const changes = changes;
    db.update(userId, changes)
    .then()
    .catch( err => {
        res.status(500).json({ error: 'cannot update user info' })
    })
})

// remove - finds user by id and deletes user record
server.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    db.remove(userId)
    .then()
    .catch( err => {
        res.status(500).json({ error: 'cannot delete user' })
    })
})