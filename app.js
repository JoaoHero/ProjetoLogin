const express = require("express");
const app = express();
const port = 3000;
const loginRouter = require("./controllers/login");

// Middleware for import css
app.use(express.static("public"));

app.use("/", loginRouter);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));