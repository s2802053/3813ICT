var express = require("express");
var app = express();
var http = require("http").Server(app);

// middleware
var bodyParser = require('body-parser');

// import routes
var accountRoute = require("./routes/account");
var backendRoute = require("./routes/backend");
var homeRoute = require("./routes/home");

app.use(bodyParser.urlencoded({extended: true}));

// use routes
app.use("/account", accountRoute);
app.use("/backend", backendRoute);
app.use("/index", homeRoute);

// static directory
app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Node Server!");
    console.log("Server listening on: " + host + " port: " + port);
})

