var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", (req, res) => {
    let filepath = path.resolve("./www/index.html");
    res.sendFile(filepath);
});

module.exports = router;