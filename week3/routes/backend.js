var express = require("express");
var router = express.Router();
var _ = require("lodash");
var path = require("path");

// import list of known users
const users = require("../data/users.json");

router.post("/", (req, res) => {
    // respond to POST requests to /backend/ route
    for (user of users.users.user){
        // loop through imported list of users
        if (_.isEqual(user, req.body)){
            // if the provided data matches a known user
            // send a json response to the browser
            res.json({ok: true});
        }
    }
    // if the the provided data doesn't match a known user
    // send false json response to browser
    res.json({ok: false});
});

module.exports = router;