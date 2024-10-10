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

const deleteDriver = (req, res) => {
    
}

module.exports = {
    createDriver
}