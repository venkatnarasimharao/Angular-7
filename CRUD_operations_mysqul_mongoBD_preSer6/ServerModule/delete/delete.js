var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
var nareshIT = mongodb.MongoClient;
router.post("/",(req,res)=>{
    var p_id = req.body.p_id;
    var obj = {"p_id":p_id};
    nareshIT.connect("mongodb://localhost:27017/angular7pm",(err,db)=>{
        db.collection("products").deleteOne(obj,(err,result)=>{
            if(err){
                res.send({"delete":"fail"});
            }else{
                res.send({"delete":"success"});
            }
        });
    });
});
module.exports = router;