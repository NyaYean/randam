const express = require("express"),
		environment = require("dotenv").config(),
		yelp = require('yelp-fusion');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// environment.load();

// var token = yelp.accessToken(clientId, clientSecret).then(response => {
//   console.log(response.jsonBody.access_token);
// }).catch(e => {
//   console.log(e);
// });



var yelpRouter = express.Router();

yelpRouter.get("/", function(req, res){
		yelp.accessToken(clientId, clientSecret).then(response => {
				  const client = yelp.client(response.jsonBody.access_token);
				  
				  client.search({
				    term:'American',
				    location: 'Lower East Side, NY'
				  }).then(response => {
				    res.send(response.jsonBody.businesses);
				    
				  });
				
				}).catch(e => {
				  console.log(e);
		});
	})

module.exports = yelpRouter