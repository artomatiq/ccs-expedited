const express = require('express');
const serverless = require('serverless-http');

const Timesheet = require('../../models/Timesheet');

// const router = express.Router();
const router = express();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json({message: 'here is the time data'});
    }
    catch (error) {
        next(error);
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;