const express = require("express");
const router = express.Router();

const path = require("path");
const basePath = path.join(__dirname, "./../views");

router.get("/login", function (req, res) {
    res.sendFile(`${basePath}/login.html`);
});

module.exports = router;
