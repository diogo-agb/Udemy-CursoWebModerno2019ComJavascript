//Convertendo objeto para JSON. Note que funções são ignoradas. Gera texto somente
const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c} }
console.log(JSON.stringify(obj))

//Convertendo JSON 'texto 'para objeto, string para Object
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) // Todos atributos delimitados com aspas duplas " ".

