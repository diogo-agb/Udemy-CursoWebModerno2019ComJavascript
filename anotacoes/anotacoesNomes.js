/*Algumas notações utilizadas durante o curso

Math.PI
Math.floor
Math.ceil
Math.pow
Math.round (valor arredondado)
var
let
const
function name(params) {
    
}
console.log()
this
setInterval
.bind = Muda o contexto do .this
.typeof
.pop
.length = 
null
NaN
undefined
new 
.random()
.toUpperCase()
module.exports
Number.isInteger()
.toFixed()
.toString()
.charAt()
.charCodeAt()
.indexOf()
.substring()
.concat()
.replace()
.split()
.call()
.apply()
delete
Object.freeze
JSON.stringify()
JSON.parse()

*/
//Exercício função arrow

/*
function imprimirSoma(a, b){
    console.log(a + b)
}
*/

let imprimirSomaArrow = (a, b) => console.log (a / b)
imprimirSomaArrow(100, 2)

/*Função com retorno

function soma(a = 1, b = 1){ // Teste com valores padrões
    return a + b
}
*/

