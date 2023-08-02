const express = require("express");
const app = express();
const port = 3000;
const loginRouter = require("./controllers/login");
const registerRouter = require("./controllers/register");
const db = require("./models/db");

// Middleware for import css
app.use(express.static("public"));
// Middleware for get requisition in json and inputs
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Middleware for routers
app.use("/", registerRouter);
app.use("/", loginRouter);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));