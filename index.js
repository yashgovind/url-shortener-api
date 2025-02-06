const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./routes/router");

const app = express();
const apiPath = process.env.API;
const port = process.env.PORT || 2000;

const mongoUrl = process.env.URL;

// global middlewares.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiPath, router); //router

mongoose.connect(mongoUrl).then(() => {
  console.log("connected to db");
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
