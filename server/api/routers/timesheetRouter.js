const express = require('express');
// const serverless = require('serverless-http');

const timesheetController = require('../controllers/timesheetController');

const router = express();

router.get('/', )

// router.get('/', async (req, res, next) => {
//     try {
//         res.status(200).json({message: 'here is the time data'});
//     }
//     catch (error) {
//         next(error);
//     }
// })



// router.use((err, req, res, next) => {
//     res.status(err.status || 500).json({
//         message: err.message,
//         stack: err.stack
//     })
// })

module.exports = router;