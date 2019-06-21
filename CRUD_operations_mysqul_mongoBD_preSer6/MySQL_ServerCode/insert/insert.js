//import db_connection
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//import express module
var express = require("express");
//create the router instance
var router = express.Router();
//create the Rest API
router.post("/",(req,res)=>{
    //read p_id,p_name & p_cost
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    //insert into products table
    connection.query("insert into products values("+p_id+",'"+p_name+"',"+p_cost+")",
                            (err,result)=>{
        if(err){
            res.send({"insert":"fail"});
        }else{
            res.send({"insert":"success"});
        }
    });
});
//export the router
module.exports = router;