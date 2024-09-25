const express = require('express');
const Timesheet = require('../../models/Timesheet');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(500).json('here is the time data');
    }
    catch (error) {
        next(error);
    }
})

module.exports = router;