//import express module
var express = require("express");
//import mongodb module
var mongodb = require("mongodb");
//create the client
var nareshIT = mongodb.MongoClient;
//create the router instance
var router = express.Router();
//create the Rest API
router.post("/",(req,res)=>{
    //read p_id,p_name & p_cost coming from angular7
    //body is the key in req object used to read the client data
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    //prepare the JSON Object
    var obj = {"p_id":p_id,
               "p_name":p_name,
               "p_cost":p_cost};
    //connect to angular7pm
    nareshIT.connect("mongodb://localhost:27017/angular7pm",(err,db)=>{
        db.collection("products").insertOne(obj,(err,result)=>{
            if(err){
                res.send({"insert":"fail"});
            }else{
                res.send({"insert":"success"});
            }
        });
    });
});
//export the router
module.exports = router;