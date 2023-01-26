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

module.exports = breads