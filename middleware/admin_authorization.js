module.exports = (req, res, next) => {
    if (req.userData.isAdmin) {
        console.log(req.userData);
        next()
    }
    else {
        return res
            .status(401)
            .json({
                message: 'Auth failed'
            })
    }
};