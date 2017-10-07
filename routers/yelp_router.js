const express = require("express"),
		environment = require("dotenv").config(),
		yelp = require('yelp-fusion');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;


var yelpRouter = express.Router();

var mainBusiness = [];

yelpRouter.get("/", function(req, res){

			yelp.accessToken(clientId, clientSecret).then(response => {
				  const client = yelp.client(response.jsonBody.access_token);
				  client.search({
				    term:'American',
				    location: 'Lower East Side, NY'
				  }).then(response => {
				  	
				  	for (var i=0; i <= 2; i++){
								mainBusiness.push(response.jsonBody.businesses[i])
				  	}
				    res.send(mainBusiness);
				  });
					
					}).catch(e => {
					  console.log(e);
			});

})



module.exports = yelpRouter