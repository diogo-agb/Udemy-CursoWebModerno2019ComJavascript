/* 
    Voce pode passar uma funcao sem parametros, e pode recuperar esses parametros
    a partir da propriedade arguments
*/

function soma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i] // arguments é um array interno de uma função.
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, " Teste"))
console.log(soma('a', 'b', 'c'))

// Existe um operador especifico para isso a partir do ES2015 - rest/spread
