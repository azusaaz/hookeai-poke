"use strict";

const express = require('express');
const router  = express.Router();

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
    let tmpUserId= 1;
    let tmpCart = [{},{},{}];
    
    // let testObj = [
    //   {quantity: 2, menu_id: "???"},
    //   {quantity: 1, menu_id: "!!!"}
    // ];

    // if (0) { // error

    // } else {

    //   if (0) { // user didn't log-in

    //   } else {

    //     knex('users').insert({name: 'test', phone: 0000})
    //     .then(
         
    //       knex('"order"').insert({user_id: "ssss"})
    //       .then(

    //         testObj.forEach(()=>{
              
    //           knex('order_items').insert({quantity: "???",menu_id: "???", order_id:"???"})

    //         })

    //      )
    //      .then(
    
    //       
    //     )

    //     )
    //   }
    // }
    res.redirect('/confirmation')
  });

  router.get("/checkout", (req, res) => {
    console.log("aaa");
    res.render('checkout');
  });

  router.get("/confirmation", (req, res) => {
  res.render('confirmation');
  });
  return router;
};
