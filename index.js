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
/*
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
	fulfillmentText: "너의 intent는 " + intent

	}
  let quickReply = [
      {
        "payload": {},
        "platform": "FACEBOOK"
      },
      {
        "quickReplies": {
          "title": "골라봐",
          "quickReplies": [
            "가위",
            "바위",
            "보"
          ]
        },
        "platform": "FACEBOOK"
      },
      {
        "text": {
          "text": [
            ""
          ]
        }
      },
      {
        "payload": {}
      }
    ]
    responseJson.fulfillmentMessages = quickReply;
    res.json(responseJson);
	//res.json(response);


  console.log("연결되었습니다!");
});
*/

//runkit

// POST method route
app.post('/', function (req, res) {
    console.log(req);
    let action = req.body.queryResult.action;
    console.log(action);
    let responseJson = {};
    responseJson.fulfillmentText = 'This is an endpoint published to RunKit'; // displayed response
    if(action === 'telegram.quickreply'){
        let richResponses = [
                {
                    "quickReplies": {
                        "title": "This is a reply from RunKit. Choose an option",
                        "quickReplies": [
                            "YES",
                            "NO"
                        ]
                    },
                    "platform": "TELEGRAM"
                }
            ]
        responseJson.fulfillmentMessages = richResponses;
    }
    else if (action === 'facebook.card'){
        console.log('Inside facebook.card if condition');
        let richResponses = [
              {
                "card": {
                  "title": "Card Title",
                  "subtitle": "Card subtitle",
                  "imageUri": "https://github.com/fluidicon.png",
                  "buttons": [
                    {
                      "text": "Go to Google",
                      "postback": "www.google.com"
                    },
                    {
                      "text": "Go to Dialogflow",
                      "postback": "www.dialogflow.com"
                    },
                    {
                      "text": "Go to Slack",
                      "postback": "www.slack.com"
                    }
                  ]
                },
                "platform": "FACEBOOK"
              },
              {
                "text": {
                  "text": [
                    ""
                  ]
                }
              }
        ]
        responseJson.fulfillmentMessages = richResponses;
        console.log(responseJson);
    }
    res.json(responseJson);
})

console.log("실행포트번호눈" + process.env.PORT);
app.listen(process.env.PORT || 3000);


// Logic for running your server with HTTPS here
