const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  db
    .select()
    .from("Comments")
    .then((data) => {
      console.log(data);
      res.status(200);
      res.send(data);
    });
});

router.post("/", (req, res) => {
  if (
    req.body.memberId &&
    req.body.ideaId &&
    req.body.commentTimeStamp &&
    req.body.commentLine
  ) {
    if (req.body.commentTimeStamp.indexOf("Z") > -1) {
      let newTimeStamp = req.body.commentTimeStamp;
      newTimeStamp = newTimeStamp.slice(0, -1);
      req.body.commentTimeStamp = newTimeStamp;
    }
    db
      .insert(req.body)
      .returning("*")
      .into("Comments")
      .then((data) => {
        console.log(data);
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        res.status(409);
        console.error(error);
        res.end(JSON.stringify({ error: "catastrophy" }));
      });
  } else {
    res.status(400);
    res.end(JSON.stringify({ error: "horror" }));
  }
});


router.post("/multiInsert/", (req, res) => {
  db
    .insert(req.body)
    .returning("*")
    .into("Comments")
    .then((data) => {
      console.log(data);
      res.status(200);
      res.send(data);
    })
    .catch((error) => {
      res.status(409);
      console.error(error);
      res.end(JSON.stringify({ error: "catastrophy" }));
    });
});

router.delete("/delete/:id", (req, res) => {
  if (req.params.id) {
    db
      .del()
      .from("Comments")
      .where("id", req.params.id)
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
