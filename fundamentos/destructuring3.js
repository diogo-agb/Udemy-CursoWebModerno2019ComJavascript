 // Gera numero aleatorio / atribuindo valores do objeto sem acessar com a notação (.) na funcção
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand()) // assim essa linha da erro



