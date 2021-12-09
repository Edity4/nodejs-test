const express = require("express");
const locations = require("./routes/locations.js");

const app = express();

app.use("/locations", locations);

const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
