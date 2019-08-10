var express = require("express");
var app = express();
var server = require("http").Server(app);
var apiRoute = require("./routes/api");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRoute);

server.listen(3000, () => {
    console.log("Server running at localhost:" + server.address().port);
});


