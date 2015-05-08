var path = require("path");
var express = require("express");

module.exports = BoxifyWebsite;

function BoxifyWebsite(config){
    this.cofig = config;
    this.app = express();
    this.app.set("view engine","jade");
    this.app.use("/public",express.static(path.resolve(__dirname,"../public")));
    this.app.get("/",function(req,res){
        res.render("index");
    });
    this.app.listen(config.port);
}
