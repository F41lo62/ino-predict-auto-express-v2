console.log("🚀 INO-Predict Auto Express v2 iniciado com sucesso!");

const { calcularMelhorMomento } = require("./services/previsoes");

console.log("Sugestão de melhor momento:", calcularMelhorMomento());