//no inicio...
//Um byte {8 bits} - 256 caracteres
//Simbolo, Pontuacao, A-Z, a-z, 0-9

//Dois bytes {16 bits} - 65500+ caracteres

//Unicode
//Quantidade de bytes variável - expansivel

const texto = 'aΩød'
console.log(texto.match(/\u00F8|\u03A9/g));

const texto2 = 'áéíóú àèìòù âêîôû ç ãõ ü';
console.log(texto2.match(/[Á-ü]/g));