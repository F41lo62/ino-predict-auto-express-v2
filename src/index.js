console.log("🚀 INO-Predict Auto Express v2 iniciado com sucesso!");

const { calcularMelhorMomento } = require("./services/previsoes");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

console.log("Sugestão de melhor momento:", calcularMelhorMomento());

app.get("/", (req, res) => {
  res.send("INO-Predict Auto Express v2 está rodando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
