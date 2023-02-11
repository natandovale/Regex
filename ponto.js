// . é um coringa, valido para uma posição

const texto = '1,2,3,4,5,6,7,8,9'

console.log(texto.match(/1.2/g));
console.log(texto.match(/1..2/g));
console.log(texto.match(/1..,/g));

const notas = '8.3,7.1,8.8,10.0';
console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));

//ponto não resolve para quebra de linha
const text = 'Bom\ndia'
console.log(text.match(/./gi))

console.log(text.match(/..../gi))