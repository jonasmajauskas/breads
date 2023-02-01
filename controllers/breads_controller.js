const express = require('express')
const bread = require('../../models/bread')
const breads = express.Router()

// Index 
breads.get('/', (req, res) => { 
    res.send(bread)
})

breads.get('/bakery', (req, res) => {
    res.send('This is the bakery')
})

// Break up the breaks into specifics /1, /2, /3 --> ex: localhost:3003/breads/1
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
})

module.exports = breads