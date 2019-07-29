var express = require("express");
var router = express.Router();
var _ = require("lodash");
var path = require("path");

// import list of known users
const users = require("../data/users.json");

router.post("/", (req, res) => {
    for (user of users.users.user){
        if (_.isEqual(user, req.body)){
            res.json({ok: true});
        }
    }
    res.json({ok: false});
});

module.exports = router;