console.log('01)', '1' == 1)
console.log('02)', '1' === 1) //Compara valor e tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) //Compara valor e tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

//Nesse caso vai comparar a referencia de memoria e vai dizer que nao sao iguais
const d1 = new Date(0) 
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

//Assim o resultado sera verdadeiro porque estara comparando o "number"
console.log('11)', d1.getTime() === d2.getTime())
console.log('11-2)', d1.getTime() == d2.getTime())

//Melhor usar estritamente igual === de acordo com o professor
console.log('12)', undefined == null)
console.log('13)', undefined === null)










