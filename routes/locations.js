const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, latitude: 60, longitude: 60 },
    { id: 2, latitude: 80, longitude: 40 },
  ]);
});

router.get("/1", (req, res) => {
  res.json({ id: 1, latitude: 60, longitude: 60 });
});

router.get("/2", (req, res) => {
  res.json({ id: 2, latitude: 80, longitude: 40 });
});

router.post("/", (req, res) => {
  res.send("Adding new location");
});

router.delete("/1", (req, res) => {
  res.send("Delete location with id 1");
});

module.exports = router;
