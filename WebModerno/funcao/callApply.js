//A diferença entre o call e apply é a forma como voce passa os parametros na hora de 
//invocar a função a partir desses dois métodos.

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


//Outras formas de executar essa função.

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Como usar o call e apply, primeiro o contexto, depois os parametros, o apply os parametros
//sao na forma de array.
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))









