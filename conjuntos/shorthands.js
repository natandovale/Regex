//obter acesso a uma forma reduzida de expressoes mais utilizadas dentro das expressoes regulares
const texto = `1,2,3,4,5,6,a.b c!d?		-
f_g`

console.log(texto.match(/\d/g)) //Numeros [0-9]
console.log(texto.match(/\D/g)) //Não numeros [^0-9]

console.log(texto.match(/\w/g)) //caracteres [a-zA-z0-9]
console.log(texto.match(/\W/g)) //caracteres [^a-zA-z0-9]

console.log(texto.match(/\s/g)) //espaço [ \t\n\r\f]
console.log(texto.match(/\S/g)) //espaço [^ \t\n\r\f]