const express = require('express');
const Drivers = require('../models/Drivers');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json({message: 'here are all the drivers'});
    }
    catch (error){
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