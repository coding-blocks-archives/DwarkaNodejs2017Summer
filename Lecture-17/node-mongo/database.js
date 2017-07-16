/**
 * Created by aayusharora on 7/16/17.
 */

var mongodb = require('mongodb');

var url = "mongodb://localhost:27017/shopping";

var obj = "";

function connectDb(run_server) {

    mongodb.MongoClient.connect(url, function(err,db) {
        if(err) throw err;
        console.log("Connection is established");
        obj = db;
        run_server();
    });

}

module.exports = {
    connectDb
};
