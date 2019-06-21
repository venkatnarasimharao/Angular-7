//import express module
var express = require("express");
//import body-parser module
var bodyparser = require("body-parser");
//import cors module
var cors = require("cors");
//create the Rest Object
var app = express();
//use cors module
app.use(cors());
//set the JSON As MIME Type
app.use(bodyparser.json());
//take the permission to read JSON
app.use(bodyparser.urlencoded({extended:false}));
//import fetch module
var fetch = require("./fetch/fetch");
app.use("/fetch",fetch);
//import insert module
var insert = require("./insert/insert");
app.use("/insert",insert);
//import update module
var update = require("./update/update");
app.use("/update",update);
//import delete module
var remove = require("./delete/delete");
app.use("/delete",remove);
//assign the port no
app.listen(8080);
console.log("Server Listening the port no.8080");