const express = require('express');
const app = require('./src/app');
const dotenv = require('dotenv').config();


const PORT = process.env.PORT || 5050;


app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

