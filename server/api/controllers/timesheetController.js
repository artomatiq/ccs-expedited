const {Timesheet} = require('../models');



const checkActiveStatus = async (driverId) => {
    try {
        const activeLog = await Timesheet.findOne({
            where: {
                driver_id: driverId,
                clock_out: null
            }
        })

        return activeLog ? true : false;
    }
    catch (error) {
        throw error;
    }
}



const createLog = async (req, res, next) => {
    try {
        const isActive = await checkActiveStatus(req.params.driverId)

        if (isActive) {
            res.status(400).json({message: 'Driver is already clocked in'});
        }
        else {
            const log = await Timesheet.create({
                driver_id: req.params.driverId,
                date: req.body.date,
                clock_in: req.body.clock_in
            })
            res.status(201).json(log);
        }
    }
    catch (error) {
        next(error);
    }
}
//http POST :3007/api/timesheet/1 date="2024-10-18" clock_in="2024-10-18 12:11:11"



const updateLog = async (req, res, next) => {
    try {
        const id = req.params.id;
        const {action, time} = req.body;

        //validate action
        if (!['pause', 'resume', 'clockout'].includes(action)) {
            res.status(400).json({message: 'Invalid action'});
        }

        //find the active log
        const activeLog = await Timesheet.findOne({
            where: {
                driver_id: id,
                clock_out: null
            }
        })

        if (!activeLog) {
            res.status(400).json({message: 'Driver is not clocked in'});
        }

        //update the log
        if (action === 'pause') {
            activeLog.clock_pause = time;
        } else if (action === 'resume' && activeLog.clock_pause) {
            activeLog.clock_resume = time;
        } else {
            activeLog.clock_out = time;
        }
        await activeLog.save()

        res.status(200).json(activeLog)
    }
    catch (error) {
        next(error);
    }
}
//http PUT :3007/api/timesheet/1 action="pause" time="2024-10-18 19:11:11"



const getAllActiveLogs = async (req, res, next) => {
    try {
        const activeLogs = await Timesheet.findAll({
            where: {
                clock_out: null
            }
        })
        res.status(200).json(activeLogs);
    }
    catch (error) {
        next(error)
    }
}
//http GET :3007/api/timesheet/active


module.exports = {
    createLog,
    updateLog,
    getAllActiveLogs
}