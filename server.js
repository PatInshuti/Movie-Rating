const express = require("express");
const app = express();
const unirest = require("unirest");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000;
const ListRouter = require("./routes/api/MovieList");
const ProfileRouter = require("./routes/api/MovieProfile");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));



app.use("/api/movieList", ListRouter);
app.use("/api/movieProfile",ProfileRouter);

app.listen(port, ()=> console.log("Running on " + port) );