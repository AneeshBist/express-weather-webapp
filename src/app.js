const { log } = require("console");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;

//public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing
app.get("/", (req, res) => {
  res.render("index");
  //res.send("welcome to The Weather Website");
});

app.get("/about", (req, res) => {
  res.render("about");
  //res.send("welcome to About section of the Website");
});

app.get("/weather", (req, res) => {
  res.render("weather");
  //res.send("welcome to Weather section of the Website");
});

app.get("*", (req, res) => {
  res.render("404error");
  //res.send("Oopps !!! 404 error page");
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
