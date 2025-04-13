const mongoose = require('mongoose');

// Connection URI
const uri = process.env.ATLAS_URI;


mongoose.connect(uri);

const db = mongoose.connection;

// Handler events for connection
db.on('error', (error) => {
    console.error('Error connecting database:', error);
});

db.once('open', () => {
    console.log('Database connected!');
});

// Export the connection and mongoose to use them in other files
module.exports = { db, mongoose };