// Created by laTortuga and LuM
// (c) All rights reserved.


/** 
*
*   @author LuM
*   @version 1.0
*   @license MIT
*   @file app.js
*   @description main 
*
*/


"use strict";


// imports
var express = require("express");
var path = require("path");
var routes = require("./server")

// init express
let app = express(); 

// port setup
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // JavaScript Template Enginge

app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Port: " + app.get("port")) // public start 
});
