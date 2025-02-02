const mongoose = require("mongoose");
// const shorId =  require("nanoid");
mongoose.set("strictQuery", true);

const schema = new mongoose.Schema({
    shorId: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required:true
    },
    timeStamp: {
        type: Date,
        required:true,
    }
})

const model = mongoose.model("urlModel", schema);


module.exports = model;
