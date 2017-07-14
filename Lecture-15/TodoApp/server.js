/**
 * Created by aayusharora on 7/12/17.
 */
var express = require('express');
var app = express();
var path = require('path');
var sql = require('./db');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname,"views"));

console.log(__dirname);
var port = 5000 || process.env.port;

app.use('/',express.static(path.join(__dirname,'public_static') ));
//
// app.get('/todos/:id',function(req,res) {
//     console.log(id);
//     // var query = "SELECT * FROM todos";
//     // sql.TodoList(query,function(data){
//     //     res.send(data);
//     // });
//
// });
//
// // app.post('/todos/insert',function(req,res){
// //
// //     var query = "INSERT into todos (task,done) VALUES ('"+ req.body.todo + "',true)";
// //     sql.TodoList(query,function(data){
// //         res.send(data);
// //     });
// //
// //
// // });
// //
// // app.post('/todos/update',function(req,res) {
// //
// //     var query = "UPDATE todos SET done=" +
// //                  req.body.done + " where id=" +
// //                  req.body.id;
// //     sql.TodoList(query,function(data){
// //         console.log(data);
// //         res.send(data);
// //     });
// // });
// //
// // app.post('/todos/delete', function(req,res) {
// //     var query = "DELETE from todos where id=" + req.body.id;
// //     sql.TodoList(query,function(data){
// //         res.send(data);
// //     })
// // });
// //
// // app.get('/all',function(req,res){
// //     var query = "SELECT * FROM todos";
// //     sql.TodoList(query,function(data){
// //         res.render('index',{todo: data});
// //
// //
// //     });
// //
// // })
app.get('/users/:userId', function (req, res) {
    res.send(req.params)
})
app.listen(port, function() {
   console.log("Server listening at port")
});
