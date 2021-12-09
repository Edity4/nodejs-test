const express = require("express");
const locations = require("./routes/locations.js");

const app = express();

app.use("/locations", locations);

const port = process.env.PORT || 8080;

const data = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Ashley" },
  { id: 3, name: "Garrus" },
  { id: 4, name: "Liara" },
];

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/customers", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
