const mongoose = require("mongoose");
const nanoid = require("../utils/nanoid");
mongoose.set("strictQuery", true);

const date = Date.now();
const schema = new mongoose.Schema({
    shorId: {
        type: String,
        required: true,
        value:nanoid,
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
