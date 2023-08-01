const express = require("express");
const app = express();
const port = 3000;
const loginRouter = require("./controllers/login");
const db = require("./models/db");
const registerRouter = require("./controllers/register");

// Middleware for import css
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Middleware for routers
app.use("/", registerRouter);
app.use("/", loginRouter);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));