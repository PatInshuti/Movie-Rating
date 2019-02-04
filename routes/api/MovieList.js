const express = require('express');
const unirest = require("unirest");
const router = express.Router();

router.get("/", (req, res) =>{
    var number = 0
    //res.json({data:"this is a movie List"});
    unirest.get(" https://hydramovies.com/api-v2/?source=http://hydramovies.com/api-v2/current-Movie-Data.csv")
        .end(function (result) {

            console.log(result.status, result.headers, result.body);
            if (result.length == 10){
               exit();
            }
        });
    });

module.exports = router;