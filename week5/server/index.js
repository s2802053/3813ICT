var express = require("express");
var app = express();
var http = require("http").Server(app);
var apiRoute = require("./routes/api");

app.use("/api", apiRoute);


