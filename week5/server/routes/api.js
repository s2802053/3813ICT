var router = require('express').Router();

var dates = ['December 17, 1995 03:24:00', 'October 05, 1983 08:48:00', 'January 12, 1992 14:35:00'];
for (date of dates){

}

router.post("/login", (req, res) => {
    res.sendStatus("api/login route hit");
});

module.exports = router;