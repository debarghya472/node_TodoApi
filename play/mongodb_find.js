const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test/TodoApp',(err,client)=>{
    if(err)
    return console.log('unable to connect to db');
    console.log('connected successfully');

    const db=client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5ec6bacc2c7d9ae44a5c8c87')
    // }).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));

    // },(err)=>{
    //     console.log("unable to fetch");
    // }); 

    db.collection('Users').find({location: 'bengal'}).count().then((count)=>{
        console.log(`Todos count: ${count}`);   
    },(err)=>{
        console.log("unable to fetch");
    });


    //client.close();
});