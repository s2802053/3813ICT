var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", (req, res) => {
    let filepath = path.resolve("./www/account.html");
    res.sendFile(filepath);
});

module.exports = router;