const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) // não é um grupo, pois grupos internaos dentro de conjuntos não são suportados
console.log(texto.match(/([abc])/gi)) // é um grupo