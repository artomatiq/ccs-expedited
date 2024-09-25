require('dotenv').config();

const express = require('express');
const server = express();

const driversRouter = require('./routers/drivers/driversRouter');
const timesheetRouter = require('./routers/timesheet/timesheetRouter');

server.use(express.json());
server.use('/api/drivers', require())

server.use('/api/drivers', driversRouter);
server.use('/api/timesheet', timesheetRouter);

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