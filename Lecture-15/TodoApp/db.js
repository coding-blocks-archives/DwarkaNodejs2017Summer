/**
 * Created by aayusharora on 7/12/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'newdb'

}

function TodoList(query,cb,params) {
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query(query,function(err,data){
        if(err) throw err;
        cb(data);
        console.log(data);
        connection.end();
    });

}

module.exports = {
   TodoList
};