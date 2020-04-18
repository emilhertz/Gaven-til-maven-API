const jwt = require('jsonwebtoken');
//check if user is signed in and if user is admin
//brug user_authorization middleware og send svar tilbage at bruger er logget ind.
//denne controller skal kaldes på hver eneste html side, af en specific funktion

module.exports = async (req, res) => {
    try {
        let decoded = jwt.verify(req.headers.authorization, 'hemmelig');
        console.log(decoded);
    } catch (e) {
        return res.status(401)
            //lig nu SKAL jeg sende noget json el. andet med for at slutte requesten.
            //er der en anden måde man kan slutte en request på, da json ikke bliver brugt til noget?
            .json({
                message: 'Auth failed'
            });
    }
};