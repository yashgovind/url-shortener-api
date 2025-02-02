const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/router");
const apiPath = process.env.API;
const port = process.env.PORT || 2000;
const connectDb = require("./utils/connection");
const mongoUrl = process.env.URL;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiPath, router);

const start = async () => {
    await connectDb(mongoUrl);
    app.listen(() => {
        console.log(`server running at port ${port}`);
    })
};

start();