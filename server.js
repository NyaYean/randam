var application_root = __dirname,
		express = require("express"),
    bodyParser = require("body-parser"),
    request = require("request"),
    logger = require("morgan"),
    path = require("path"),
    yelp = require('yelp-fusion');



var yelpRouter = require("./routers/yelp_router.js")



var app = express();

app.use(logger("dev"));
app.use(bodyParser());

app.use(express.static(__dirname + '/public'));

app.use('/search', yelpRouter)



module.exports = app;



var server = app.listen(3000, function() {
  console.log("Server on 3000");
});