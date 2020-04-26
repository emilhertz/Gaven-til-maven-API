const Reservation = require("../models/Reservation");
module.exports = (req, res) => {
    Reservation.create({
        ...req.body,
        userId: req.userData.userId
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