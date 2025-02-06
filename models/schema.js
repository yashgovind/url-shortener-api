const mongoose = require("mongoose");
const nanoid = require("../utils/connection");
mongoose.set("strictQuery", true);

const date = Date.now();
const schema = new mongoose.Schema({
    shorId: {
        type: String,
        required: true,
        value:nanoid(10),
    },
    url: {
        type: String,
        required:true
    },
    timeStamp: {
        type: Date,
        value:date
    }
})

const model = mongoose.model("urlModel", schema);


module.exports = model;
