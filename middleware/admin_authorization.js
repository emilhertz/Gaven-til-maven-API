module.exports = (req, res, next) => {
    //Check if the user actually is an admin
    if (req.userData.isAdmin)
        //'next' secures that the next function is started --> adminRestaurantsController
        next();
    else
        return res
            //Return status code and an object with an errormessage
            .status(401)
            .json({
                message: 'Auth failed'
            })
};