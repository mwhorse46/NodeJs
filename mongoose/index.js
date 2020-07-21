const mongoose = require('mongoose');
const User = require('./models/User2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/animals-2');
mongoose.connection
    .once('open',()=>console.log('CONNECTED'))
    .on('error',(err)=>{
        console.log(`could not connect`,err);
    });



app.get('/',(req,res)=>{
    res.send('ROOT');
});



app.post('/users',(req,res)=>{

    const newUser = new User({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isActive: req.body.isActive
    });

    newUser.save().then(savedUser=>{
        res.send('USER SAVED');
    }).catch(err=>{
        res.status(404).send(`user not save because ...${err}`);
    });

});

app.get('/users',(req,res)=>{
    User.find({}).then(users=>{
        res.send(users);
    });
});

app.patch('/users/:id',(req,res)=>{
    const id =req.params.id;
    const firstName = req.body.firstName;

    User.findByIdAndUpdate(id, {$set: {firstName:firstName}}, {new:true})
        .then(savedUser=>{
            res.send('USER SAVED BY PATCH AGAIN');
        });
});

app.put('/users/:id',(req,res)=>{
    const id =req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    User.findByIdAndUpdate(id, {$set: {firstName:firstName,lastName:lastName}}, {new:true})
        .then(savedUser=>{
            res.send('USER SAVED BY PUT AGAIN');
        });
});

// app.delete('/users/:id',(req,res)=>{
//     User.findOne({_id:req.params.id}).then(user=>{
//         user.remove().then(userRemoved=>{
//             res.send('user remove'+userRemoved);
//         });
//     });
// });

app.delete('/users/:id',(req,res)=>{
    User.findByIdAndRemove({_id:req.params.id}).then(userRemoved=>{
        res.send(`user ${userRemoved.firstName} removed`);
    });
});


const port = 4444 || process.env.PORT;

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});