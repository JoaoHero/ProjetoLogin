const express = require("express");
const app = express();
const port = 3000;
const db = require("./models/db");
const loginRouter = require("./controllers/login");
const registerRouter = require("./controllers/register");
const routerHome = require("./controllers/home");
const cookieParser = require('cookie-parser');

// Middleware for import css
app.use(express.static("public"));
app.use(cookieParser())
// Middleware for get requisition in json and inputs
app.use(express.urlencoded({
    extended: true
}));
// Middleware for remove the final bar, if exist
app.use((req, res, next) => {
    if (req.path.substr(-1) === '/' && req.path.length > 1) {
      const query = req.url.slice(req.path.length);
      res.redirect(301, req.path.slice(0, -1) + query);
    } else {
      next();
    }
});
app.use(express.json());
// Middleware for routers
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", routerHome);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));