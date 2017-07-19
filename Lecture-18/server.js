
var express = require('express');

var app = express();

var route = {
    secure: require('./route/secure'),
    notsecure: require('./route/notsecure')
}

app.use('/secures', route.secure );
app.use('/notsecure', route.notsecure);

app.listen('5000', function(){
    console.log("App is listening on Port 5000");
});