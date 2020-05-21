const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test/TodoApp',(err,client)=>{
    if(err)
    return console.log('unable to connect to db');
    console.log('connected successfully');

    const db=client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'todo something',
    //     completed: false

    // },(err,result)=>{
    //     if(err)
    //     return console.log('unable to insert todo',err);
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });
    db.collection('Users').insertOne({
        _id: 1272,
        name: 'debarghya',
        age: 19,
        location: 'bengal'

    },(err,result)=>{
        if(err)
        return console.log('unable to insert todo',err);
        console.log(JSON.stringify(result.ops,undefined,2))
    });

    // client.close();
});