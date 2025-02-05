const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/router");
const apiPath = process.env.API;
const port = process.env.PORT || 2000;
const connectDb = require("./utils/connection");
const mongoUrl = process.env.URL;
const { nanoid } = require('nanoid'); //=> "L7h_SrMaSEFDjFNnzO5Bn"

// global middlewares.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiPath, router); //router


//  start server and db.
const start = async () => {
    await connectDb(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    app.listen(port,() => {
        console.log(`server running at port ${port}`);
    })
};

start();