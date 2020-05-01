const Reservation = require("../models/Reservation");
module.exports = (req, res) => {
    Reservation.create({
        timeOfReservation: req.body.timeOfReservation,
        pax: req.body.pax,
        comment: req.body.comment,
        restaurant: req.body.restaurant._id,
        customer: req.body.customer._id
    })
    //status code 201: "User created"
        .then(response => {return res.status(201).json({
            message: "Reserveret!"
        })})
        .catch(error => {
            console.log(error.message);
            return res.status(401).json({
                message: error.message
            })
        })


};