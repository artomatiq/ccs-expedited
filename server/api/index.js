require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const server = express();

const driversRouter = require('./routers/driversRouter');
const timesheetRouter = require('./routers/timesheetRouter');

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

server.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
})

module.exports = server;