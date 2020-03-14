const express = require('express');
const app=express();
const api=require('./serverside/mess-api');
const bodyParser=require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbAdmin:dbAdmin@cluster0-vaxrd.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true }, );


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000,() =>{
	console.log('listening on 3000');
});
    

client.connect(err => {
  // perform actions on the collection object
  if(err)
	throw err;
  console.log('Connection works!');
});


app.use('/JavaScript',express.static('JavaScript'));
app.use('/img',express.static('img'));
app.use('/interfata_bucatar',express.static('interfata_bucatar'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/main.html');
});


app.get('/GetUser',(req,res)=>{
  api.getUsers(client,res);
});

app.post('/SaveUser',function(req,res){
    api.createUser(client,req.body.tables,res);
    res.send("Save was successful!");
});
