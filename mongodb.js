// CRUD
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const {MongoClient, ObjectId} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.getTimestamp());

MongoClient.connect(connectionUrl)
.then(client=>{
    console.log('Connected to MongoDB');

    const db = client.db(databaseName);
    // return db.collection('tasks').insertMany(
    //     [{
    //         name:'Task 3',
    //         description:'Task 1 description',
    //         status:'Complete'
    //     },
    // {
    //         name:'Task 4',
    //         description:'Task 2 description',
    //         status:'Incomplete'
    //     }]
    // )
    // return db.collection('users').insertOne({
    //     _id:id,
    //     name:"Advik 1",
    //     age:2,
        
    // });
    // return db.collection('users').insertMany(
    //     [{
    //         name:'Puttu',
    //         age:2
    //     },
    // {
    //     name:'Puttani',
    //     age:2
    // }]
    // )
    // return db.collection('users').findOne({
    //     name:"Advik 1"
    // });
    //  return db.collection('users').findOne({
    //     _id:new ObjectId("69a07010f2dcff5a54b851e3")
    // });
    // return db.collection('users').find({
    //    age:2
    // }).toArray();
    //     return db.collection('users').countDocuments({
    //    age:2
    // });
    // return db.collection('users').updateOne({
    //     _id:new ObjectId('69998e610b608dfe479dc8de')
    // },{
    //     $set:{
    //         name:'Puttu' 
    //     }
    // })
    // return db.collection('tasks').updateMany({
    //     status:'Incomplete'
    // },{
    //     $set:{
    //         status:'Complete'
    //     }
    // })
    // return db.collection('users').deleteMany({
    //     age:3
    // })
    return db.collection('tasks').deleteOne({
        status:'Incomplete'
    });

})
.then(result=>{
    console.log(result);
})
.catch(err=>console.error(err))