const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

//routing
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
