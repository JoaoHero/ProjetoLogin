const express = require("express");
const router = express.Router();
const path = require("path");
const basePath = path.join(__dirname, "./../views");
const { eAdmin } = require("../midlleware/auth");

router.get("/home", eAdmin, (req, res) => {
    res.sendFile(`${basePath}/home.html`);
});

module.exports = router;