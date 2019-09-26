/*Quando voce trabalha com funções normais voce pode nomear as funções
e voce pode criar uma funçao anonima, quando voce passa para ser executada
por outra funçao, ou quando armazena em uma variável ou dentro de um objeto*/

const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 3, soma)
imprimirResultado(3, 4, function(x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)  // Função anonima com arrow function, arrow é sempre anonima.

const pessoa = {
    falar: function(){
        console.log('Opa.')
    }
}

pessoa.falar()



