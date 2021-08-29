const { authJwt } = require("../middleware");
const controller = require("../controllers/weight.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        console.log("WEIGHT ROUTE HIT");
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Save new weight
    app.post(
        "/save_weight",
        [authJwt.verifyToken],
        controller.save_weight
    );

    // Get user weight history
    app.get(
        "/get_weight_history",
        [authJwt.verifyToken],
        controller.get_weight_history
    );

    // Update weight history
    app.post(
        "/update_weight",
        [authJwt.verifyToken],
        controller.update_weight
    );

    // Delete weight
    app.post(
        "/delete_weight",
        [authJwt.verifyToken],
        controller.delete_weight
    );
}