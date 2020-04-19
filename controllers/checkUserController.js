module.exports = (req, res) => {
    res.status(200)
        .json({
            isAdmin: req.userData.isAdmin
        })
};