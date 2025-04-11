express = require('express');

const PORT = process.env.PORT || 5050;
const app = express();

// Endpoint to test the server
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

