// Dependencies
const express = require('express')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Routes
app.get ('/', (req, res) => {
    res.send('Welcome to an Awesome Ape about Breads!')
})

// Breads landing page route
const breadsController = require('./controllers/breads_controller.js')
    app.use('/breads', breadsController)

// Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})