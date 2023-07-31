const express = require("express");
const app = express();
const port = 3000;

// Middleware for import css
app.use(express.static("public"));

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));