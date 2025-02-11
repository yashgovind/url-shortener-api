const express = require("express");
const router = express.Router();
const { createShortUrl, getShortUrl } = require("../controllers/controller");
const app = express();

// Global Middleware (MUST be before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/:id", getShortUrl);

router.post("/",createShortUrl);

module.exports = router;