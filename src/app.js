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

app.listen(http://18.231.228.139/, () => {
  console.log("Servidor rodando na porta 3000");
});
