const {Timesheet} = require('../models');

const findLogsByDate = async (req, res, next) => {
    try {

    }
    catch {

    }
}

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



module.exports = {
    createLog
}