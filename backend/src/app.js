const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const Pizza = require('./routes/pizzaRoutes');

app.use(express.json()); 


// Endpoint to test the server
app.get('/ping', (req, res) => {
    res.send('pong');
});


app.use('/api/pizza', Pizza);


module.exports = app;
