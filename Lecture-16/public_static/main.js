/**
 * Created by aayusharora on 7/14/17.
 */


var username = prompt("Enter username");

$(function() {
    var socket = io();

    $('#btn').click(function(){
        var inp = $('#inp').val();
        socket.emit('rec_message',{user: username,input :inp});



    });
    socket.on('get',function(data){

       var msg = '<li>' + data.user + ":" + data.input + '</li>';
       $('#message').append(msg);

    });

    socket.on('all',function(data) {
       data.forEach(client =>{
           var msg = '<li>' + client.user + ":" +
                    client.input + '</li>';
           $('#message').append(msg);
       });


    })

});