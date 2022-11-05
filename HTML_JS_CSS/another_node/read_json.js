const blog = require('./blog.json');
const fs = require('fs');
const jsdom = require('jsdom')
const express = require("express");
const app = express();
const dom = new jsdom.JSDOM("main.html")
const jquery = require('jquery')(dom.window)
jquery(".blogik3").hide();
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/main.html");
});
app.listen(3000, ()=>console.log("Сервер запущен..."));
//console.log();