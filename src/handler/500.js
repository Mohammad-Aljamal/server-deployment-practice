
function errorHandler (req, res, next){
    res.status(500).send({
        cose: 500,
        route: req.path,
        Message: `server error: ${error.Message}`,

    })

}

module.exports = errorHandler;