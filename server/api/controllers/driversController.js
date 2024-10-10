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

const deleteDriver = (req, res, next) => {
    Driver.destroy({
        where: {
            id: req.params.id
        }
    })
        .then (res => {
            if (res) {
                res.status(204).json({message: 'Driver deleted'});
            }
            else if (!res) {
                res.status(404).json({message: 'Driver not found'});
            }
        })
        .catch(next);
}

module.exports = {
    createDriver
}