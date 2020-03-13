const express = require('express');
const app=express();
const api=require('./serverside/mess-api');
const bodyParser=require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://master:master123@maincluster-shard-00-00-vfi9h.mongodb.net:27017,maincluster-shard-00-01-vfi9h.mongodb.net:27017,maincluster-shard-00-02-vfi9h.mongodb.net:27017/test?ssl=true&replicaSet=MainCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
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


app.use('/tableDraw',express.static('tableDraw'));
app.use('/img',express.static('img'));
app.use('/meniu',express.static('meniu'));
app.use('/interfata_bucatar',express.static('interfata_bucatar'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/main.html');
});

app.get('/interfata_bucatar',(req,res)=>{
  res.sendFile(__dirname + '/interfata_bucatar.html');
});




app.get('/updateTable',(req,res)=>{
    api.getRestaurantSeats(client,res)
});

app.get('/getAllMenus',(req,res)=>{
  api.getMenus(client,res);
});

app.get('/getAllLists',(req,res)=>{
  api.getList(client,res);
});

/** for chef */
app.get('/chefGetLists',(req,res)=>{
    api.getList(client,res);
});


app.post('/saveTable',function(req,res){
    api.saveRestaurantSeats(client,req.body.tables,res);
    res.send("Save was successful!");
});

app.post('/updateList',function(req,res){
    api.saveToList(client,req.body.list,res);
});

app.post('/insertMenu',function(req,res){
    api.saveNewMenu(client,req.body.menu,res);
});



app.delete('/clearAllTable',function(req,res){
	api.deleteAllSeats(client);
});

app.delete('/deleteOneTable',function(req,res){
  api.deleteSpecificSeat(req.body.table,client,res);
});