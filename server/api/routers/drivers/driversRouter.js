const express = require('express');
const Drivers = require('../../models/Drivers');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json('here are all the drivers');
    }
    catch (error){
        next(error);
    }
})

module.exports = router;