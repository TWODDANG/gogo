// Dependencies
const express = require('express');
const bodyparser = require('body-parser');

const { WebhookClient } = require('dialogflow-fulfillment');

 //Create an instance
const agent = new WebhookClient({request: request, response: response});

var http = require("http");
setInterval(function() {
    http.get("http://radiant-everglades-63897.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

// Configuration
const app = express();
app.use(bodyparser.json());
app.get('/', (req, res) => res.send('Hello World!'));

// Webhook route
app.post('/', (req, res) => {
	const data = req.body;
  console.log(data);
  var intent = data.queryResult.intent.displayName;
  var queryText = data.queryResult.queryText;
  var parameters = data.queryResult.parameters;
  agent.add(`how are you doing`);
  agent.add("hi");


	// Code the task you want to achieve with @data
	// Read the v2 api documentation of dialogflow : https://dialogflow.com/docs/fulfillment
	// Using the v2 will become mandatory, Google wrote a guide to migrate from v1 to v2 as v2 is officially released
/*
	const response = {
	fulfillmentText: "너의 intent는 " + intent

	}
	res.json(response);
  res.json(response);
  */
  console.log("연결되었습니다!");
});
console.log("실행포트번호눈" + process.env.PORT);
app.listen(process.env.PORT || 3000);


// Logic for running your server with HTTPS here
