// Aula extra simulando um array com um objeto

const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false //true
})
console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)