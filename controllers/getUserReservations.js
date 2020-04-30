const Reservation = require('../models/Reservation');

module.exports = (req, res) => {

    Reservation.find({
        //We collect the data from userAuthorization to get more security
        customer: req.userData.userId
    })
        .populate(["customer", "restaurant"])
        .then(response => {
            res.status(200).json({
                reservations: response
            })
        })
        .catch(err =>{
            res.status(401).json({
                message: err.message
            })
        })
};