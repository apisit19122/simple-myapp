const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worldddd OaTT3");
});

app.get("/oat", (req, res) => {
  res.send("im OaTT3");
});

app.get("/home", (req, res) => {
  res.send("This is home page.");
});

app.listen(9000, () => {
  console.log("http://127.0.0.1:9000");
});
