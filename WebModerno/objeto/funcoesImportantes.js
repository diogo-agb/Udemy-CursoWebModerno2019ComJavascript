const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)) //Pega todas as chaves de um objeto
console.log(Object.values(pessoa)) // Pega todos os valores de um objeto.
console.log(Object.entries(pessoa))// Pega todos os registros, utilizando subarray.

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Com destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Definindo propriedades para os atributos
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Pega todos os atributos dos outros objetos e coloca no objeto de destino (concatena os atributos
//se já existe o atributo então sobrescreve esse atributo)

//Trava o objeto, nao permitindo alterações;
Object.freeze(obj)
obj.c = 1234
console.log(obj)





