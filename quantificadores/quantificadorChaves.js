const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/\d{2}/g))
console.log(texto.match(/\d{1,}/g))

console.log(texto.match(/\w{7}/g))
console.log(texto.match(/[\wõã]{7,}]/g))
