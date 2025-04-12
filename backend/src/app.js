const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const Pizza = require('./routes/pizzaRoutes');
const Order = require('./routes/orderRoutes');

app.use(express.json()); 


// Endpoint to test the server
app.get('/ping', (req, res) => {
    res.send('pong');
});


app.use('/api/pizza', Pizza);
app.use('/api/order', Order);


module.exports = app;
