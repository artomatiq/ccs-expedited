require('dotenv').config();

const express = require('express');
const server = express();

const driversRouter = require('./routers/driversRouter');
const timesheetRouter = require('./routers/timesheetRouter');

server.use(express.json());

server.use('/api/drivers', driversRouter);
server.use('/api/timesheet', timesheetRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running on Vercel' });
})

server.use('*', (req, res) => {
    res.status(404).json({message: 'not found'});
})

module.exports = server;