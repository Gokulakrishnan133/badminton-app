let express = require("express"),
 router = express.Router(),
 MatchRouteHandler = require("../route-handler/match-route-handler");

MatchRouteHandler = new MatchRouteHandler();
router.route("/match/:id").get(MatchRouteHandler.getMatchById);
router.route("/match").post(MatchRouteHandler.createMatch);
router.route("/match").put(MatchRouteHandler.updateMatch);

module.exports = router;