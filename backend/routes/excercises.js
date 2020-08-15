const router = require("express").Router();
let Excercise = require("../models/excercise.model");

router.route("/").get((req, res) => {
  Excercise.find()
    .then((excercises) => res.json(excercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  newExcercise
    .save()
    .then(() => res.json("Excercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
