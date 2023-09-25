const { log } = require("console");
const express = require("express");
const app = express();
const port = 8000;

app.get("", (req, res) => {
  res.send("welcome to The Website");
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
