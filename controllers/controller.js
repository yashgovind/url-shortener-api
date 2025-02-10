const model = require("../models/schema");
const express = require("express");
const app = express();
const path = require("path");
app.set('views', path.resolve(__dirname,"views","home.ejs"));

/**
  API to create a short URL from a given URL from user.
  @param  {string} url `required` from user.
 */
const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    console.log("request-->", req.body);

    if (!url) return res.status(400).json("URL is required");

    const { nanoid } = await import("nanoid");

    const shortId = nanoid(6);
    const timeStamp = Date.now();

    const newUrl = await model.create({
      shortId,
      url,
      timeStamp,
    });

    newUrl.save();
    return res.render("home", { newUrl: url });
    // res.status(201).json(newUrl);

  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};
    
/**
 API to redirect user to the orginal URL based on `shortId`.

 @param  {string} id `required` which is the shortId.
 */
const getShortUrl = async (req, res) => {
  try {
    // get the short url id.
    const id = req.params.id;

    if (!id) return res.status(400).json("id is required");

    const getUrl = await model.findOne({ shortId: id });

    if (!getUrl)
      return res
        .status(404)
        .json("Invalid short id. No stored URL found with this id");

    res.redirect(301, getUrl.url);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

module.exports = {
  createShortUrl,
  getShortUrl,
};
