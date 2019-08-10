var express = require("express");
var app = express();
var http = require("http").Server(app);
var apiRoute = require("./routes/api");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api", apiRoute);


