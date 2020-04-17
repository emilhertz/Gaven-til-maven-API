const jwt = require('jsonwebtoken');
//check if user is signed in and if user is admin
//brug user_authorization middleware og send svar tilbage at bruger er logget ind.
//denne controller skal kaldes på hver eneste html side, af en specific funktion

module.exports = async (req, res) => {
    try {
        let decoded = jwt.verify(req.headers.authorization, 'hemmelig');
        return res.send('works');
    } catch (e) {
        console.log(e);
        return res.status(401);
    }




    /*
    try {
        //Saving decoded token on variable
        const decoded = jwt.verify(req.headers.authorization, "hemmelig");
        console.log(decoded);
        return res.status(200)
    }
    //procedure if auth failed
    catch (e) {
        return res.status(401)
    }
     */
};