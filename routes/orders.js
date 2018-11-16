"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("order")
  //     .join('order_items', 'order.id', '=', 'order_items.order_id')
  //     .join('menu', 'menu.id', '=', 'order_items.menu_id')
  //     .then((results) => {
  //       console.log(results);
  //       res.json(results);
  //   });
  // });

  //past orders
  // router.get("/:id", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("order")
  //     .join('order_items', 'order.id', '=', 'order_items.order_id')
  //     .join('users', 'users.id', '=', req.params.id)
  //     .join('menu', 'menu.id', '=', 'order_items.menu_id')
  //     .then((results) => {
  //       console.log(results);
  //       res.json(results);
  //   });
  // });

  //name, phone number, cardinfo (# & ccv), userid, order items, order quantity


  router.post("/checkout", (req, res) => {
    console.log("aaaa");
    let tmpUserId = 1;
    let tmpCart = [{
      quatity: 2,
      menu_id: 1
    }, {
      quantity: 1,
      menu_id: 2
    }, {
      quantity: 5,
      menu_id: 3
    }];

    if (0) { // error

    } else {

      if (req.session["user_id"]) {


      } else { // user didn't log-in

        knex('users').insert({
            name: 'test',
            phone: 0000
          })
          .then((results) => {
            console.log(result);
          })

        // knex('"order"').insert({
        //     user_id: "ssss"
        //   })
        //   .then(

        //     testObj.forEach(() => {

        //       knex('order_items').insert({
        //         quantity: "???",
        //         menu_id: "???",
        //         order_id: "???"
        //       })

        //     })
        //   )

      }
    }
    res.render('/confirmation')
  });

  router.get("/checkout", (req, res) => {
    console.log("aaa");
    res.render('checkout');
  });

  router.get("/confirmation", (req, res) => {
    res.render('confirmation');
  });

  //name, phone number, cardinfo (# & ccv), userid, order items, order quantity
  // router.post("/checkout", (req, res) => {

  // });

  router.get("/:id", (req, res) => {
    knex
      .select('menu.name', 'order_items.quantity', 'menu.price')
      .from('order')
      .join('users', 'users.id', '=', 'order.user_id')
      .join('order_items', 'order.id', '=', 'order_items.order_id')
      .join('menu', 'menu.id', '=', 'order_items.menu_id')
      .where('users.id', '=', req.params.id)
      .then((result) => {
        const templateVars = {
          order: result
        }
        console.log(templateVars);
        res.render('pastOrders', templateVars);
      });
  });

  return router;
};
