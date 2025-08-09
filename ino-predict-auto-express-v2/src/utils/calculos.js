function calcularMedia(valores) {
    return valores.reduce((a, b) => a + b, 0) / valores.length;
}
module.exports = { calcularMedia };