const Reservation = require("../models/Reservation");
module.exports = (req, res) => {
    Reservation.create({
        //Creation of an appointment with the following preferences
        timeOfReservation: req.body.timeOfReservation,
        pax: req.body.pax,
        comment: (req.body.comment !== "" ? req.body.comment: undefined),
        restaurant: req.body.restaurant._id,
        customer: req.body.customer._id
    })
    //status code 201: Reservation successfull
        .then(response => {return res.status(201).json({
            message: "Reserveret!"
        })})
        //else it sends an error
        .catch(error => {
            console.log(error.message);
            return res.status(401).json({
                message: error.message
            })
        })


};