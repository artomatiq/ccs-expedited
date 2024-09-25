require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(300).json({ api: 'running on Vercel' });
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;