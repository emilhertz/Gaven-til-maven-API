const Reservation = require("../models/Reservation");

module.exports = (req, res) => {
    //finds reservation that matches reservationID and customerID and deletes them from the collection
    Reservation.deleteOne({_id: req.body.reservation._id}, {customer: req.body.reservation.customer._id})
        .then(response => {
            //'deleteCount' counts the number of deleted restaurants in the array
            //if it is 1 --> it sends a message.
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