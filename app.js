const express = require("express");
const app = express();
const port = 3000;
const routerHome = require("./controllers/home");

// Middleware for import css
app.use(express.static("public"));


app.use("/", routerHome);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));