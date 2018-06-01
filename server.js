const express = require('express');
const action = require('./data/helpers/actionModel.js');
const mappers = require('./data/helpers/mappers.js');
const project = require('./data/helpers/projectModel.js');

const cors = require('cors');

const port = 5555;
const server = express();

server.use(cors());
server.use(express.json());

//GET FOR PROJECT
server.get('/api/projects', (req, res) => {
    project
    .get()
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

//GET FOR ACTION
server.get('/api/actions', (req, res) => {
    action
    .get()
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

//ID GET FOR PROJECT
server.get('/api/projects', (req, res) => {
    project
    .get(id)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

//ID GET FOR ACTION
server.get('/api/projects/:id', (req, res) => {
    let {id} = req.params
    if (id){
        project
        .get(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
    } else {
        res.status(400).json({error: "Please provide an ID."})
    }
})

//ID GET FOR PROJECT
server.get('/api/actions/:id', (req, res) => {
    let {id} = req.params
    if(id){
        action
        .get(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
    } else {
        res.status(400).json({error: "Please provide an ID."})
    }
})


server.listen(port, () => console.log(`Server Running on Port ${port}`));