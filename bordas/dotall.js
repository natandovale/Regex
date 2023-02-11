const texto = 'Romário era um excelente jogador\n, mas hoje é um politico questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall
console.log(texto.match(/^[\s\S]*r$/gi))