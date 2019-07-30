// Created by laTortuga and LuM
// (c) All rights reserved.


/** 
*
*   @author LuM
*   @version 1.0
*   @license MIT
*   @file server.js
*   @description routes (server proxy)
*
*/


"use strict";


// imports
var express = require("express");

// router setup
let router = express.Router();
router.get("/", function(require, result) { // start main view 
    console.log("VIEW STARTED")

    // client 
    result.render("app");
});

module.exports = router; // router without ES6 std
