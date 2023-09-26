const { log } = require("console");
const express = require("express");
const app = express();
const port = 8000;

app.get("", (req, res) => {
  res.send("welcome to The Weather Website");
});

app.get("/about", (req, res) => {
  res.send("welcome to About section of the Website");
});

app.get("/weather", (req, res) => {
  res.send("welcome to Weather section of the Website");
});

app.get("*", (req, res) => {
  res.send("Oopps !!! 404 error page");
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
