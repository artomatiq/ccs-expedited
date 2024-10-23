const authenticateToken = (req, res, next) => {
    try {

        next()
    }
    catch (error) {
        next(error)
    }
}

const authorizeAdmin = (req, res, next) => {
    try {

        next()
    }
    catch (error) {
        next(error)
    }
}

const authorizeDriver = (req, res, next) => {
    try {

        next()
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    authenticateToken,
    authorizeAdmin,
    authorizeDriver
}