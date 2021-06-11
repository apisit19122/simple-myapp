const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(9000, () => {
  console.log("http://127.0.0.1:9000");
});
