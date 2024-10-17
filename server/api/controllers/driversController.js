const {Driver} = require('../models');
const { get } = require('../routers/timesheetRouter');

const createDriver = async (req, res, next) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json(driver);
    }
    catch (error){
        next(error);
    }
}
//http POST :3007/api/drivers name="Random" email="randy@gmail.com" phone="1111111111" hourly_rate="25"

const getAllDrivers = async (req, res, next) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).json(drivers);
    }
    catch (err) {
        next(err)
    }
}
//http GET :3007/api/drivers



const getDriverById = async (req, res, next) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        res.status(200).json(driver);
    }
    catch (err){
        next(err);
    }
}
//http GET :3007/api/drivers/6




const updateDriver = async (req, res, next) => {
    try {
        const [updated] = await Driver.update(req.body, {
            where: {id: req.params.id}
        })
        if (updated) {
            res.status(200).json({message: 'Driver updated'});
        } 
        else {
            res.status(404).json({message: 'Driver not found'});
        }
    }
    catch (err) {
        next(err);
    }
}
//http PUT :3007/api/drivers/8 name="Altered"




const deleteDriver = (req, res, next) => {
    Driver.destroy({
        where: {id: req.params.id}
    })
        .then (rows => {
            if (rows) {
                res.status(204).json({message: 'Driver deleted'});
            }
            else if (!rows) {
                res.status(404).json({message: 'Driver not found'});
            }
        })
        .catch(next);
}
//http DELETE :3007/api/drivers/6



module.exports = {
    createDriver,
    getDriverById,
    updateDriver,
    deleteDriver,
    getAllDrivers,
}