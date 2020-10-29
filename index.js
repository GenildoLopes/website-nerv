const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// handlebars
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layout",
    partialsDir: [
      //  path to your partials
      path.join(__dirname, "views/partials"),
    ],
  })
);
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/projetos", (req, res) => {
  res.render("projetos");
});
app.get("/sobre", (req, res) => {
  res.render("sobre");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
