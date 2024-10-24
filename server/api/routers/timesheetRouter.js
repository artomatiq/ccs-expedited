const express = require('express');
const timesheetController = require('../controllers/timesheetController');

const {authorizeAdmin, authorizeDriver} = require('../middleware/authMiddleware')

const router = express();

router.post('/:driverId', timesheetController.createLog);
router.get('/active', timesheetController.getAllActiveLogs);
//router.get('/', timesheetController.getAllLogsByPeriod);
//router.get('/:id', timesheetController.getDriverLogsByPeriod);
router.put('/:id', timesheetController.updateLog);
// router.delete('/:id', timesheetController.deleteDriver);

router.use ((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;