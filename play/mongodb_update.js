const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test/TodoApp',(err,client)=>{
    if(err)
    return console.log('unable to connect to db');
    console.log('connected successfully');

    const db=client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({
        name: 'debarghya'
    },{
        $inc:{
            age: 1
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    });
    //client.close();
});