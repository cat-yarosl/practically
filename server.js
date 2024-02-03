const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Send main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.js'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
