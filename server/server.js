var express=require('express');
var bodyParcer=require('body-parser');


var {mongoose}=require('./db/mongoose');

var {Todo}=require('./models/Todos');
var {User}=require('./models/Users');

var app =express();

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
app.listen(3000,()=>{
    console.log('started on 3000');
});
