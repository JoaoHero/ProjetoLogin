const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const path = require("path");
const basePath = path.join(__dirname, "./../views");

module.exports = {
  eAdmin: async function (req, res, next) {
    const authToken = req.cookies.authToken; // Obtem o token do cookie chamado "authToken"

    if (!authToken) {
        return res.sendFile(`${basePath}/login.html`);
    }

    try {
      const decode = await promisify(jwt.verify)(authToken, "SDHASDYASDBH6ASDA");
      req.userId = decode.id;
      return next();
    } catch (err) {
        return res.sendFile(`${basePath}/login.html`);
    }
  }
};