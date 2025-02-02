const express = require("express");
const router = express.Router();
const {createShortUrl,getShortUrl } = require("../controllers/controller");


router.get("/:id",getShortUrl);

router.post("/",createShortUrl);

module.exports = router;