const Restaurant = require('../models/Restaurant');

module.exports = (req, res) => {
    try{
        console.log(req);
        Restaurant.delete({restaurantId: req.body.restaurantId, adminId: req.userData.adminId});
        res.status(200).json({
            message: "Restaurant er nu slettet"
        })
    } catch (e) {
        res.status(401).json({
            message: "Restaurant kunne ikke slettes"
        })
    }
}


//Frontend: Ændre til "slet"
//Når man trykker på slet, skal den lave et API kald med det endpoint jeg har lavet. Angiv hvilken restaurant der skal slettet.
//Backend: Verificer at det er 'admin' der ejer restauranten => Slet restaurant i database.
//Returner besked til frontend
