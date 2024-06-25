const express = require("express");
const app = express();

let data = {
  integrantes: [{ nome: "Alex Pfaffenzeller" }, { nome: "João Maia" }],
};

app.get("/", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});

app.get("/integrantes", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
