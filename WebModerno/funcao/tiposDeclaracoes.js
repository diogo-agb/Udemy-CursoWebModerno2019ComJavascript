console.log(soma(3, 4)) // (Function declaration)Mesmo chamando antes da função, a linha é executada, porque
//o interpretador do JavaScript carrega primeiro as funções do arquivo.

// console.log(sub(3, 4)) // Nessa chamada vai dar erro, sub is not defined. Porque foi declarada como function expression.

//console.log(mult(3, 4)) Com a Named tambem vai dar erro, mult is not defined.

//Function declaration
function soma(x, y){
    return x + y
}

//Function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 4))

//Named function expression. Forma pouco usada. No debug do codigo o nome da funcao vai aparecer, nao como uma funcao anonima no stack.
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))


