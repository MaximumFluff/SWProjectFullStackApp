const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  db
    .select()
    .from("Category")
    .then((data) => {
      console.log(data);
      //res.status(200);
      res.send(data);
    });
});


router.post("/", (req, res) => {
  if (
    req.body.title &&
    req.body.budgetLimit &&
    (req.body.isActive === 0 || req.body.isActive === 1)
  ) {
    // Front-end has to send a response as JSON
    db
      .insert(req.body)
      .returning("*")
      .into("Category")
      .then((data) => {
        console.log(data);
        //res.status(200);
        res.send(data);
      })
      .catch((error) => {
        //res.status(409);
        console.error(error);
        res.end(JSON.stringify({ error: "catastrophy" }));
      });
  } else {
    //res.status(400);
    res.end(JSON.stringify({ error: "horror" }));
  }
});

router.post("/multiInsert/", (req, res) => {
  db
    .insert(req.body)
    .returning("*")
    .into("Category")
    .then((data) => {
      console.log(data);
      //res.status(200);
      res.send(data);
    })
    .catch((error) => {
      //res.status(409);
      console.error(error);
      res.end(JSON.stringify({ error: "catastrophy" }));
    });
});

router.delete("/delete/:id", (req, res) => {
  if (req.params.id) {
    db
      .del()
      .from("Category")
      .where('id', req.params.id)
      .then((data) => {
        console.log(data);
        // res.send is apparently deprecated, use res.sendStatus
        res.sendStatus(200);
        res.send(data);
      })
      .catch((error) => {
        res.sendStatus(409);
        console.error(error);
        res.end(JSON.stringify({ error: "horror" }));
      });
  } else {
    res.sendStatus(400);
    res.end(JSON.stringify({ error: "horror" }));
  }
});

module.exports = router;
