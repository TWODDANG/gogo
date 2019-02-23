// Dependencies
const express = require('express');
const bodyparser = require('body-parser');

var http = require("http");
setInterval(function() {
    http.post("http://radiant-everglades-63897.herokuapp.com/webhook");
}, 300000); // every 5 minutes (300000)

// Configuration
const app = express();
app.use(bodyparser.json());
app.get('/', function(req, res){
    res.send('Hello home page');;
});

// Webhook route
app.post('/webhook', (req, res) => {
	const data = req.body;
  console.log(data);

	// Code the task you want to achieve with @data
	// Read the v2 api documentation of dialogflow : https://dialogflow.com/docs/fulfillment
	// Using the v2 will become mandatory, Google wrote a guide to migrate from v1 to v2 as v2 is officially released

	const response = {
		fulfillmentText: "앙기모띠",
	}
	res.json(response);
  console.log("연결되었습니다!");
});
console.log("실행포트번호눈" + process.env.PORT);
app.listen(process.env.PORT || 3000);


// Logic for running your server with HTTPS here
