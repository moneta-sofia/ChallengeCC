const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors'); 
const app = express();
const Pizza = require('./routes/pizzaRoutes');
const Order = require('./routes/orderRoutes');

app.use(express.json()); 

app.use(cors())

// Endpoint to test the server
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use('/api/pizza', Pizza);
app.use('/api/order', Order);


module.exports = app;
