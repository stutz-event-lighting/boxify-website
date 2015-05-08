var fs = require("fs");
var BoxifyWebsite = require("./lib/index.js");
var bw = new BoxifyWebsite(JSON.parse(fs.readFileSync("./config.json")+""));
