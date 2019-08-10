var router = require('express').Router();
import { User } from '../../model/user';

let users = [];
users[0] = new User("25 July 1993", "steve@gmail.com", "12345");
users[1] = new User("13 February 1997", "notsteve@gmail.com", "abcde");
users[2] = new User("28 October 1983", "maybesteve@gmail.com", "password");

router.post("/login", (req, res) => {
    const email = req.body.email;
    const pw = req.body.password;

    for (let user of users){

        if (user.validate(email, pw)){

            // retrieve object with user attributes
            let userObj = user.user();
            userObj.valid = true;
            let userString = JSON.stringify(userObj);
            sessionStorage.user = userString;
            res.json(userString);
        }
    }
    // return a user object where valid == false
    res.json(JSON.stringify({email: email, password: pw, age: null, valid: false}));
});

module.exports = router;