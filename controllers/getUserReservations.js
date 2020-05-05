const Reservation = require('../models/Reservation');

module.exports = (req, res) => {

    Reservation.find({
        //We collect the data from userAuthorization to get more security
        //finds the reservation with the userId
        customer: req.userData.userId
    })
        .populate(["customer", "restaurant"])
        .then(response => {
            res.status(200).json({
                reservations: response
            })
        })
        //send a errormessage and a statuscode back
        .catch(err =>{
            res.status(401).json({
                message: err.message
            })
        })
};