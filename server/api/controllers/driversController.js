const {Driver} = require('../models');

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


const deleteDriver = (req, res, next) => {
    Driver.destroy({
        where: {
            id: req.params.id
        }
    })
        .then (rows => {
            console.log(rows);
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
    deleteDriver
}