const {Driver} = require('../models');

const createDriver = async (req, res) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json(driver);
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createDriver
}