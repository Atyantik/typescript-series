"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
app.use("/static", express.static(path.join(__dirname, '..', 'build')));
app.get('/', function (req, res) {
    return res.send("<!DOCTYPE html>\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<title>My experiments with TypeScript</title>\n\t\t\t\t<style>\n\t\t\t\t  html,body {\n\t\t\t\t  \tmargin:0;\n\t\t\t\t  \tpadding:0;\n\t\t\t\t  \tfont-family: monospace;\n\t\t\t\t  \tfont-size: 20px;\n\t\t\t\t  }\n\t\t\t\t  #logger {\n\t\t\t\t  \tbackground-color: #eee; \n\t\t\t\t  \tpadding: 20px; \n\t\t\t\t  \tmax-width: 100%; \n\t\t\t\t  \theight: 600px; \n\t\t\t\t  \tmax-height: calc( 90vh - 2em - 35px); \n\t\t\t\t  \tmargin: 10px;\n\t\t\t\t  \toverflow-y: auto;\n\t\t\t\t  }\n\t\t\t\t  .log-entry {\n\t\t\t\t  \tmax-width: 100%;\n\t\t\t\t  \tpadding: 5px;\n\t\t\t\t  \tbackground-color: #f6f6f6;\n\t\t\t\t  }\n\t\t\t\t  .title {\n\t\t\t\t  \tmargin: 10px;\n\t\t\t\t  }\n\t\t\t\t</style>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<h1 class=\"title\">Logger:</h1>\n\t\t\t\t<div id=\"logger\"></div>\n\t\t\t\t<script src=\"/static/index.js\" async></script>\n\t\t\t</body>\n\t\t</html>\n\t");
});
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
