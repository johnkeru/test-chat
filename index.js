// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// Initialize express and create an HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle socket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Test by emitting a message to the client
    socket.emit('welcome', 'Hello from the server!');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
