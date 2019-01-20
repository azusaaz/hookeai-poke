"use strict";
const express = require('express');
const router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require("body-parser");

const app = express();

const accountSid = process.env.SID;
const authToken = process.env.AUTH;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({
  extended: true
}));

module.exports = (knex) => {

  // comment out below for demo

  //Webhooks - Restaurant responds with either Ready or Confirmed, and correct response message
  // router.post('/', (req, res) => {
  //   const twiml = new MessagingResponse();
  //   knex
  //     .select('phone')
  //     .from("users")
  //     .orderBy('id', 'DESC')
  //     .limit(1)
  //     .then((result) => {
  //       const phoneNumber = JSON.stringify(result[0].phone);
  //       if (req.body.Body == 'Ready') {
  //         client.messages.create({
  //             body: 'Your order from Hookeai Poke is ready for pickup!  Go to location: 416 Leslie St to pick up and enjoy.',
  //             to: phoneNumber, // Text this number
  //             from: process.env.PHONE_NUM // From a valid Twilio number
  //           })
  //           .then((message) => console.log(message.sid));
  //       } else if (req.body.Body == 'Confirmed') {
  //         client.messages.create({
  //             body: 'Your order from Hookeai Poke has been recieved and being prepared!  You will be notified when ready.',
  //             to: phoneNumber, // Text this number
  //             from: process.env.PHONE_NUM // From a valid Twilio number
  //           })
  //           .then((message) => console.log(message.sid));
  //       } else {
  //         twiml.message(
  //           'Derp, I dont understand what you said.  Please say either Confirmed or Ready.'
  //         );
  //       }
  //     })

  //   res.writeHead(200, {
  //     'Content-Type': 'text/xml'
  //   });
  //   res.end(twiml.toString());
  // });

  // return router;
}
