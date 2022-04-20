const express = require("express");
const path = require("path");

const app = express();
const temppath = path.join(__dirname + "/templates");

app.set("views", temppath);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    myname: "saurabh",
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/", (req, res) => {
  res.send("this is from express server");
});

app.listen(8000, () => {
  console.log("server is running");
});
