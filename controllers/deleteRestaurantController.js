const Restaurant = require('../models/Restaurant');

module.exports = (req, res) => {
    //finds restaurant that matches resID and adminID and deletes them from the collection
        Restaurant.deleteOne({_id: req.body.restaurant._id}, {admin: req.userData.userId})
            //if a restaurant is successfully deleted, the following is executed
            .then((response) => {
                if (response.deletedCount === 1) {
                    res.status(200).json({
                        message: "Restaurant er nu slettet"
                    })
                } else {
                    res.status(401).json({
                        message: "Restaurant kunne ikke findes"
                    })
                }
            })
            //if a restaurant is not deleted probably, the following is executed
            .catch((e) => {
                res.status(401).json({
                message: "Restaurant kunne ikke slettes"
                })
            })
};