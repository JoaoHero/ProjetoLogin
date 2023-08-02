const express = require("express");
const router = express.Router();
const path = require("path");
const basePath = path.join(__dirname, "./../views");

router.get("/home", (req, res) => {
    res.sendFile(`${basePath}/home.html`);
});

module.exports = router;