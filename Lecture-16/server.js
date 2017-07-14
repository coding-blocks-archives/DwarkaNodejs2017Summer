/**
 * Created by aayusharora on 7/14/17.
 */
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

var socket = require('socket.io');

var io = socket(server);

var messages = [];
app.use('/',express.static('public_static'));

io.on('connection',function(socket){
    console.log(socket.id);

    socket.on('rec_message',function(data){
        messages.push(data);
        io.emit('get', data);
    })

    socket.emit('all', messages);
});

server.listen(5000, function(){
    console.log("Server is listening on port 5000");
});