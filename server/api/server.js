const driversRouter = require('./routers/driversRouter');
const timesheetRouter = require('./routers/timesheetRouter');

const express = require('express');

const server = express();

server.use(express.json());

server.use('/api/drivers', driversRouter);
server.use('/api/timesheet', timesheetRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'the server is running' });
})

server.use('*', (req, res) => {
    res.status(404).json({message: 'not found'});
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;