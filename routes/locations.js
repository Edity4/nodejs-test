const express = require("express");
// const cors = require("cors");
const router = express.Router();

router.use(express.json());
// router.use(cors());
// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

nextID = 3;

let data = [
  { id: 1, latitude: 60, longitude: 60 },
  { id: 2, latitude: 80, longitude: 40 },
];

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/:id([0-9]+)", (req, res) => {
  let haettava = data.find((x) => x.id == req.params.id);
  if (haettava) res.json(haettava);
  else res.status(404).send(`Could not find item with id ${req.params.id}`);
});

router.post("/", (req, res) => {
  let uusi = req.body;
  if (uusi) {
    uusi.id = nextID++;
    data.push(uusi);
    res.status(201).json(uusi);
  } else res.status(400).send("Invalid object.");
});

router.delete("/:id([0-9]+)", (req, res) => {
  newData = data.filter((x) => x.id != req.params.id);
  if (newData.length < data.length) {
    data = newData;
    res.status(204).end();
  } else {
    res.status(404).send(`Could not find item with id ${req.params.id}`);
  }
});

module.exports = router;
