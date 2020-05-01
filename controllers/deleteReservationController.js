const Reservation = require("../models/Reservation");

module.exports = (req, res) => {
    Reservation.deleteOne({_id: req.body.reservation._id}, {customer: req.body.reservation.customer._id})
        .then(response => {
            if (response.deletedCount === 1){
                res.status(200).json({
                    message: "Reservation slettet!"
                })
            } else {
                res.status(409).json({
                    message: "Kunne ikke finde reservation"
                })
            }
        })
        .catch(e => {
            res.status(409).json({
                message: e.message
            })
        })
};