var express=require('express');
var bodyParcer=require('body-parser');
var {mongoose}=require('./db/mongoose');
const _=require('lodash');


var {ObjectID}=require('mongodb');
var {authenticate}=require('./middleware/authenticate');
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

app.post('/user/login',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    
    User.findByCredential(body.email,body.password).then((user)=>{
        user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).send(user);
        })
    }).catch((e)=>{
        res.status(400).send();
    });
});

app.delete('/user/me/token',authenticate,(req,res)=>{
    //console.log(req.header('x-auth'));
    req.user.removeToken(req.header('x-auth')).then(()=>{
        res.status(200).send();
    }).catch((err)=>{
        res.status(400).send();
    });
})
app.get('/user/me',authenticate,(req,res)=>{
    res.send(req.user);
});


app.listen(port,()=>{
    console.log(`started at port ${port}`);
});
