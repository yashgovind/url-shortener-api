const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./routes/router");
const path = require("path");
const app = express();
const apiPath = process.env.API;
const port = process.env.PORT || 2000;
const mongoUrl = process.env.URL;

// global middlewares.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', "ejs"); //for ejs VIEW ENGINE for ssr rendering
app.set('views', path.resolve(__dirname,"views","home.ejs"));


app.use(apiPath, router); //router

mongoose.connect(mongoUrl).then(() => {
  console.log("connected to db");
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
