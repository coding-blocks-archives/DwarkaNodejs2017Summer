/**
 * Created by aayusharora on 7/16/17.
 */

var express = require('express');
var database = require('./database');

var app = express();
var port = 5000 || process.env.port;

app.use('/',express.static('public_static'));

database.connectDb(function(){

    app.listen(port, function() {
        console.log("Server is listening on Port " + port);
    });

});
