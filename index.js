// implement your API here

const express = require('express'); // import the express package

const server = express(); // creates the server

// watch for connections on port 5000
server.listen(5000, () =>
    console.log('Server running on http://localhost:5000')
);