var express=require('express');
var bodyParcer=require('body-parser');
var {mongoose}=require('./db/mongoose');
const _=require('lodash');

var {ObjectID}=require('mongodb');

var {Todo}=require('./models/Todos');
var {User}=require('./models/Users');

var app =express();
const port=process.env.PORT || 3000;

app.use(bodyParcer.json());

app.post('/todos',(req,res)=>{
    var todo =new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });

});

app.post('/user',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    var user =new User(body);

    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);

    }).catch((err)=>{
        res.status(400).send(err);
    });

});

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404),send();
        }
        res.send({todo});
    }).catch((e)=>{
        return res.status(404).send();
    });
});


app.listen(port,()=>{
    console.log(`started at port ${port}`);
});
