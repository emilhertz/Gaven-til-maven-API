const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.cookies['token'], 'hemmelig');
        req.userData = decoded;
        next();
    } catch (e) {
        return res.status(401)
            .json({
                message: 'Auth failed'
            })
    }
};