const express = require('express');
const driversController = require('../controllers/driversController');

// const router = express.Router();
const router = express()

router.post('/', driversController.createDriver);
router.get('/', driversController.getAllDrivers);
// router.get('/:id', driversController.getDriverById);
// router.put('/:id', driversController.updateDriver);
router.delete('/:id', driversController.deleteDriver);

router.use ((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;