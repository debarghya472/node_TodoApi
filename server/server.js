var express=require('express');
var bodyParcer=require('body-parser');


var {mongoose}=require('./db/mongoose');

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
    var user =new User({
        email: req.body.email
    });

    user.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });

});

app.get('/todos',(req,res)=>{
   Todo.find().then((todos)=>{
       res.send({todos});
   },(err)=>
   res.status(400).send(err));
});


app.listen(port,()=>{
    console.log(`started at port ${port}`);
});
