const express = require("express");
const router = express.Router();

router.get("/1", (req, res) => {
  res.json({ id: 1, latitude: 60, longitude: 60 });
});

module.exports = router;
