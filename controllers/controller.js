const model = require("../models/schema");
const express = require("express");
const app = express();
// global middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', "ejs")
/**
  API to create a short URL from a given URL from user.
  @param  {string} url `required` from user.
 */
const createShortUrl = async (req, res) => {
  try {
    // console.log(req.body); // body is coming

    const {url} = req.body;
    // console.log(req.body.url); // req.body.url is coming as undefined. idk why.

    if (!url) return res.status(400).json("URL is required");
    // console.log(url);

    const { nanoid } = await import("nanoid");

    const shortId = nanoid(6);
    const timeStamp = Date.now();

    const newUrl = await model.create({
      shortId,
      url,
      timeStamp,
    });
    // console.log(newUrl);

    newUrl.save();
    return res.render("redirectedPage",{url,shortId});

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
    console.log(id);

    if (!id) return res.status(400).json("id is required");

    const getUrl = await model.findOne({ shortId: id });
    console.log(getUrl);
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
