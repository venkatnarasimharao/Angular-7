var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post("/",function(req,res){
    var p_id = req.body.p_id;
    connection.query("delete from products where p_id="+p_id,
                (err,result)=>{
        console.log(result);
        if(result.affectedRows>0){
            res.send({"delete":"success"});
        }else{
            res.send({"delete":"fail"});
        }
    });
});
module.exports = router;