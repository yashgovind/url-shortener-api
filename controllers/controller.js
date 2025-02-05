const model = require("../models/schema");

const createShortUrl = (async(req,res) => {
    // create the newUrl short one.
    //
    const { shortId:id,url, timeStamp } = req.body;

    const newUrl = await model.create({
        id,
        url,
        timeStamp
    });
    newUrl.save();

    res.status(201).send(newUrl);

    res.redirect("/:id");
})

const getShortUrl = (async(req, res) => {
    // get the short url
    const {id} = req.params.id;
    if (!id || !url || !timeStamp) return res.status(404).json("error found");


    const getUrl = await model.findOne({ id });

    if (!getUrl) return res.status(404).json("error found");


    res.status(200).send(getUrl);
});

module.exports = {
createShortUrl,getShortUrl
};