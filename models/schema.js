const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    required: true,
  },
});

const model = mongoose.model("urlModel", schema);

module.exports = model;
