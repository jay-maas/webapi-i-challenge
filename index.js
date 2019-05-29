const express = require('express')

const db = require('./data/db.js')

const server = express() 

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Hello, welcome to the server')
})

server.get('/api/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({
                error: "The users information could not be retrieved.",
                err
            })
        })
})

server.get('/api/users/:id', (req, res) => {
    const { id } =req.params

    db.findById(id)
        .then(user => {
            if(user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message: "The user with the specified ID does not exist." 
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'The user information could not be retrieved.',
                err
            })
        })
})  

server.post('/api/users', (req, res) => {
    const userInfo = req.body
    const { name, bio } = userInfo
    if(name && bio) {
        db.insert(userInfo)
            .then(userId => {
                res.status(201).json(userId)
            })
            .catch(err => {
                res.status(500).json({
                    errorMessage: "There was an error while saving the user to the database",
                    err
                })
            })
    } else {
        res.status(400).json({
            errorMessage: "Please provide name and bio for the user."})
    }
})

server.delete('/api/users/:id', (req, res) =>{
    const { id } = req.params

    db.remove(id)
        .then(deleted => {
            if(deleted) {
                res.status(204).end()
            } else {
                res.status(404).json({
                    message: "The user with the specified ID does not exist."
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: "The user could not be removed",
                err
            })
        })
})

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    const { name, bio } = changes

    db.update(id, changes)
        .then(updated => {
            if(updated) {
                if(name && bio) {
                    res.status(200).json(updated)
                } else {
                    res.status(400).json({
                        errorMessage: "Please provide name and bio for the user."
                    })
                }
                
            } else {
                res.status(404).json({
                    message: "The user with the specified ID does not exist."
                })
            }
            
        })
        .catch(err => {
            res.status(500).json({
                error: "The user information could not be modified.",
                err
            })
        })
})

server.listen(5000, () => 
    console.log('Server running on http://localhost:5000')
)