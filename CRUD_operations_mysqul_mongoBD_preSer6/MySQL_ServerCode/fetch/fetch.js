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
router.get("/",(req,res)=>{
    connection.query("select * from products",
                (err,recordsArray,fields)=>{
        res.send(recordsArray);
    });
});
//export the router
module.exports = router;