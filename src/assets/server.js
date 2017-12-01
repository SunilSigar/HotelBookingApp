var express=require('express');
app = module.exports = express();

//var app=express();
var mongodb = require('mongodb');
var bodyParser = require('body-parser');


var MongoClient = mongodb.MongoClient;


var url = 'mongodb://localhost:27017/HotelBookingDb';


//Added to resolve the cross domain issue while connecting from Angular (localhost:9000) to the current port (localhost:3000)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(3000,function(){
console.log("Listening on 3000");
});
