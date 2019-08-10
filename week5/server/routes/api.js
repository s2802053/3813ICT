var router = require('express').Router();
var PrivateUser = require('../model/PrivateUser');

let users = [];
users[0] = new PrivateUser("steve", "steve@gmail.com", "25 July 1993", "12345");
users[1] = new PrivateUser("notsteve", "notsteve@gmail.com", "13 February 1997", "abcde");
users[2] = new PrivateUser("maybesteve", "maybesteve@gmail.com" ,"28 October 1983", "password");

router.post("/login", (req, res) => {
    const username = req.body.username;
    const pw = req.body.password;

    for (let user of users){

        if (user.validate(username, pw)){

            // retrieve object with user attributes
            let userObj = user.user();
            userObj.valid = true;
            let userString = JSON.stringify(userObj);
            res.json(userString);
        }
    }
    // return a user object where valid == false
    res.json(JSON.stringify({username: username, email: null, birthdate: null, age: null, valid: false}));
});

module.exports = router;