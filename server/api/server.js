const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(300).json({ api: 'running on Vercel' });
})

module.exports = server;