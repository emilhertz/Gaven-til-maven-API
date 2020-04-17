const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //Try statement that tries to decode the token
    try {
        //Saving decoded token on variable
        const decoded = jwt.verify(req.headers.authorization, "hemmelig");
        //Saving the decoded data as the req parameter "userData"
        req.userData = decoded;
        next();
    //Catching the error, if the decoding process fails
    } catch (e) {
        //Sending back error
        return res.status(401)
            .json({
                message: 'bla '
            })
    }
};