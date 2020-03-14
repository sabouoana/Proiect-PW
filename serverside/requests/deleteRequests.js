module.exports = {

    // clearAll : function(client){
    //     const db = client.db("Restaurant");
    //     db.collection("Tables").drop(function(err){
    //         if(err)
    //             throw err;
    //         else{
    //             console.log('Collection deleted succesfully!');
    //         }
    //     });
    //     db.createCollection("Tables", function(err, res) {
    //         if (err) throw err;
    //         console.log("Collection created!");
    //       });

          
    //     db.collection("Orders").drop(function(err){
    //         if(err)
    //             throw err;
    //         else
    //             console.log('Collection deleted succesfully!');
    //     });
    //     db.createCollection("Orders", function(err,res){
    //         if(err)
    //             throw err;
    //         console.log("Collection created");
    //       });
    // },

    // clearSpecific : function(obj,client,res){
    //     console.log(obj);
    //     const collection = client.db("Restaurant").collection("Tables");
    //     const collectionOrders = client.db("Restaurant").collection("Orders");
    //     collection.deleteOne({ x:parseInt(obj[0]) , y:parseInt(obj[1]) , nr:parseInt(obj[2]) },function(err){
    //         if(err)
    //             throw err;
    //         else{
    //             res.send("Deleted successfully!");
    //         }    
    //     });

    //     collectionOrders.deleteOne({ table_id:obj[2] },function(err){
    //         if(err)
    //             throw err;
    //         else{
    //             console.log("Deleted order!");
    //         }
    //     });

    // }
    

}