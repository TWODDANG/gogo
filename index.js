
// Dependencies
const express = require('express');
const bodyparser = require('body-parser');



 //Create an instance


var http = require("http");
setInterval(function() {
    http.get("http://radiant-everglades-63897.herokuapp.com/");
    console.log("헤로쿠 자지마라!");
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

  let responseJson = {};


	// Code the task you want to achieve with @data
	// Read the v2 api documentation of dialogflow : https://dialogflow.com/docs/fulfillment
	// Using the v2 will become mandatory, Google wrote a guide to migrate from v1 to v2 as v2 is officially released

	const response = {
"fulfillmentText": "This is a text response",
"fulfillmentMessages": [
  {
    "card": {
      "title": "card title",
      "subtitle": "card text",
      "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
      "buttons": [
        {
          "text": "button text",
          "postback": "https://assistant.google.com/"
        }
      ]
    }
  }
]
/*
,
"source": "google.com",
"payload": {
  "google": {
    "expectUserResponse": true,
    "richResponse": {
      "items": [
        {
          "simpleResponse": {
            "textToSpeech": "this is a simple response"
          }
        }
      ]
    }
  },
  "facebook": {
    "text": "Hello, Facebook!"
  },
  "slack": {
    "text": "This is a text response for Slack."
  }
}
/*
"outputContexts": [
  {
    "name": "projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name",
    "lifespanCount": 5,
    "parameters": {
      "param": "param value"
    }
  }
],

"followupEventInput": {
  "name": "event name",
  "languageCode": "en-US",
  "parameters": {
    "param": "param value"
      }
    }
*/
};
  //  responseJson.fulfillmentMessages = quickReply;
    //res.json(responseJson);
	res.json(response);


  console.log("연결되었습니다!");
});



// POST method route


console.log("실행포트번호눈" + process.env.PORT);
app.listen(process.env.PORT || 3000);
