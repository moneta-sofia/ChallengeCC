const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

// Connection URI
const uri = process.env.ATLAS_URI;


mongoose.connect(uri, {
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handler events for connection
db.on('error', (error) => {
    console.error('Error de conexión a MongoDB:', error);
});

db.once('open', () => {
    console.log('Conectado a MongoDB correctamente');
});

// Export the connection and mongoose to use them in other files
module.exports = { db, mongoose };