const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err

  console.log('CONNECTED');

  const db = client.db('animals');

    // INSERTING DATA

//   db.collection('mammals').insertOne({
//       name:'horse'
//   }, (err,result)=>{

//     if (err) return console.log(err);

//     console.log('INSERTED');

//   });


    //FETCHING DATA

//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   });


  //UPDATE DATA

//   db.collection('mammals').findOneAndUpdate(
//     {
//       _id: new ObjectId('5eaea8949c5a0e45591e8762')
//     },
//     { $set: {name:'fish'} }

//     ).then(result=>{
//         console.log(result);
//     }).catch(err=>{
//         console.log(err);
//     });



    // DELETE DATA
    // db.collection('mammals').findOneAndDelete({
    //     _id: new ObjectId('5eaea8949c5a0e45591e8762')
    // }).then(result=>{
    //     console.log(result);
    // });




});




// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/animals');
// mongoose.connection
//     .once('open',()=>console.log('CONNECTED'))
//     .on('error',(err)=>{
//         console.log(`could not connect`,err);
//     });