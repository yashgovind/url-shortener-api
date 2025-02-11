const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./routes/router");
const app = express();
const path = require("path");
const apiPath = process.env.API;
const port = process.env.PORT || 2000;
const mongoUrl = process.env.URL;
const { createShortUrl, getShortUrl } = require("./controllers/controller");

// global middlewares.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', "ejs"); //for ejs VIEW ENGINE for ssr rendering


app.use(apiPath, router); //router

app.set("view engine", "ejs"); //for ejs VIEW ENGINE for ssr rendering
// app.set("views", path.resolve(__dirname, "views", "home.ejs"));
app.set("views", path.join(__dirname, "views"));

// To render the home page view using ejs
app.get("/home", (req, res) => {
  res.render("home");
});
// app.get("/api/redirectedPage", (req, res) => {
//   res.render("home");
// });

// app.get("/home/:id", getShortUrl);

mongoose.connect(mongoUrl).then(() => {
  console.log("connected to db");
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
