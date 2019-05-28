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

server.listen(5000, () => 
    console.log('Server running on http://localhost:5000')
)