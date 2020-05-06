const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        streetName: {
        type: String,
        required: true
        },
        streetNumber: {
            type: String,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },

    admin: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required: true

    }
});

restaurantSchema.plugin(uniqueValidator);

//mongoose creates a collection in the database named restaurants, with data dictated by the restaurant schema
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;