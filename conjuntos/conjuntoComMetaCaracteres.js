const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g))
console.log(texto.match(/[$-?]/g))

//Cuidados
const texto2 = 'ABC [abc] a-c 1234'

console.log(texto2.match(/[a-c]/g))
console.log(texto2.match(/a-c/g))

console.log(texto2.match(/[A-z]/g))