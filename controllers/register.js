const express = require("express");
const router = express.Router();

const path = require("path");
const basePath = path.join(__dirname, "./../views");

router.get("/register", (req, res) => {
    res.sendFile(`${basePath}/register.html`);
});

module.exports = router;