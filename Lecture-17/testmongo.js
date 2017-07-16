/**
 * Created by aayusharora on 7/16/17.
 */

var mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/mytodos';

mongodb.MongoClient.connect(url, function(err,db) {
    console.log("Connected to Mongo Client");
    insertItem(db,function(data) {
        console.log(data);
        // findItem(db,function(data) {
        //     console.log(data);
        // })
    })

    // UpdateItem({task: "to task"},db,function(data) {
    //     findItem(db,function(data) {
    //         console.log(data);
    //     })
    // });
    // findItem(db,function(data) {
    //     console.log(data);
    // })
});


function insertItem (db,callback) {

    var collection = db.collection('todoList');
    collection.insertMany([
                        {
                            mobile:{
                                   M_type:  { power: "5000",
                                        company:"Redmi"
                                    },
                                   C_type: { power: "2000",
                                             company:"Nokia"
                                    }
                            }

                         },
                        {
                            chair:{ width: "500",
                                    height: "200",
                                    done: true}
                        }
                        ]
        ,function(err, result){
        if(err) throw err;

        callback(result);


    })
}

function findItem (db,callback) {
    var collection = db.collection('todoList');
    collection.find({}).toArray(function(err,data){
        callback(data);
    })
}

function UpdateItem( task ,db, callback) {
    var collection =  db.collection('todoList');
    collection.updateMany(task, {
            $set: {
                "task": "no task"
            }
        }
        , function(err, data){
            callback(data);
        }
    )
}