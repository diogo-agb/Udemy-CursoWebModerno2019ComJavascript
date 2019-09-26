// Função sem retorno em JavaScript

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

//Função com retorno

function soma(a = 1, b = 1){ // Teste com valores padrões
    return a + b
}

console.log(soma(3, 3))
console.log(soma(3))
console.log(soma())






