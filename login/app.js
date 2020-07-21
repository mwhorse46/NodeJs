const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true})); 

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/login', { useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log('CONNECTED');
});

app.get('/',(req,res)=>{
    res.send('ROOT');
});

app.post('/register',(req,res)=>{
    const newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    bcrypt.genSalt(10,(err,salt)=>{

        bcrypt.hash(newUser.password,salt,(err,hash)=>{

            if(err) return err;

            newUser.password = hash;

            newUser.save().then(savedUser=>{
                res.send('USER SAVED');
            }).catch(err=>{
                res.status(404).send(`user not save because ...${err}`);
            });
        });
    });
});


app.post('/login',(req,res)=>{
    User.findOne({email: req.body.email}).then(user=>{
        if(user){
            bcrypt.compare(req.body.password,user.password,(err,matched)=>{
                if(err) return err;

                if(matched){
                    res.send('USER WAS ABLE TO LOGIN');
                }else{
                    res.send('USER WAS NOT ABLE TO LOGIN');
                }
            });
        }
    });
});

app.listen(4111,()=>{
    console.log('listening the port 4111');
});