var express=require("express");
var cors=require("cors");
var fs=require("fs");
var app=express();

app.use(cors());
app.get("/staticfiles",(req,resp)=>{
    //req is the object used to get the data from client
    //res is the object used to send the response to client
    //both req & res is provided by node engine
    fs.readFile("./static/sample.json",(err,data)=>{
        if(err){
            resp.send({"read":"fail"});
        }else{
            resp.send(data);
        }
    });
});
app.listen(8084);
console.log("server listing to the port number....!");
