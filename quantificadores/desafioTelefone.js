const text = `Lista telefônica:
              - (11) 98756-1212
              -98765-4321`

const regex = /\(\d{2}\) \d{5}\-\d{4}|\d{5}\-\d{4}/g

console.log(text.match(regex))

//resolucao
console.log(text.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))