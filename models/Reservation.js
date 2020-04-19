const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    timeOfReservation: {
        type: String,
        required: true
    },

    pax: {
        type: Number,
        required: true
    },

    comment: {
        type: String
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Restaurant',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required: true
    }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;