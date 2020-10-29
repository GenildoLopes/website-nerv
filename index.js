const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
var path = require("path");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "njk");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
