// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(3,3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3)) //Resultado -1

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!')