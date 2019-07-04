//Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 4))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()//true
lexico2()//true

//parametros defaul
function log(texto = 'Node'){
    console.log(texto)
}
log()

//Operador rest/spread
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

