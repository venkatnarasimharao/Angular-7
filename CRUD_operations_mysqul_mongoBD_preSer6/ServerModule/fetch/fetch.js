//import express module
var express = require("express");
//import mongodb module
var mongodb = require("mongodb");
//mongodb follows the client server architecture
//so we must create client
//client will connect to mongodb
var nareshIT = mongodb.MongoClient;
//where "nareshIT" is the client

//create the router instance
var router = express.Router();
//where "router" instance used to create the modules

//create the Rest API
router.get("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/angular7pm",(err,db)=>{
        db.collection("products").find().toArray((err,array)=>{
            res.send(array);
        });
    });
});
//export the module
module.exports = router;