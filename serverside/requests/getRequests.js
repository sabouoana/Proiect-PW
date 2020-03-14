module.exports = {

    getUsers: function(client,res){
        var collection = client.db("PortDB").collection("Users");
        collection.find({}).toArray(function(err,result){
            if(err)
                throw err;
            else
                res.send(result);
        });
    },

}