const express = require('express');
const timesheetController = require('../controllers/timesheetController');

const router = express();

router.post('/:driverId', timesheetController.createLog);
// router.get('/', timesheetController.getAllDrivers);
// router.get('/:id', timesheetController.getDriverById);
router.put('/:id', timesheetController.updateLog);
// router.delete('/:id', timesheetController.deleteDriver);

router.use ((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;