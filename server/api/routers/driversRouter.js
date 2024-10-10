const express = require('express');
const driversController = require('../controllers/driversController');

// const router = express.Router();
const router = express()

router.post('/', driversController.createDriver);
// router.get('/', driversController.getAllDrivers);
// router.get('/:id', driversController.getDriverById);
// router.put('/:id', driversController.updateDriver);
// router.delete('/:id', driversController.deleteDriver);



module.exports = router;