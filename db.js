const mongoose=require('mongoose');
var mongoURL="mongodb+srv://sanjayvinoth:sanjayvinoth7@cluster0.uzufz1q.mongodb.net/test"

mongoose.connect(mongoURL,{useUnifiedTopology:true , useNewUrlParser:true});

var connection=mongoose.connection;

connection.on('error' , ()=>{
    console.log('Mongo DB connection failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB connection successful')
})

module.exports=mongoose