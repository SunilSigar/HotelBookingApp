var express=require('express');
app = module.exports = express();

//var app=express();
var mongodb = require('mongodb');
var bodyParser = require('body-parser');


var MongoClient = mongodb.MongoClient;


var url = 'mongodb://localhost:27017/hotels';


//Added to resolve the cross domain issue while connecting from Angular (localhost:9000) to the current port (localhost:3000)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
	var MongoClient = require('mongodb').MongoClient;
	//console.log(username);
	MongoClient.connect(url, function(err, db){
		if(!err){
			console.log("we are connected");
			var collection = db.collection('hotels');
			collection.find().toArray(function(err, items){
				if(err) throw err;
				console.log(items.length);
				res.json(items);
			});
        }
        else{
            console.log("error");
        }
	});
});

app.listen(3000,function(){
console.log("Listening on 3000");
});
