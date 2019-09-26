let num1 = 1
let num2 = 2

num1++ // Forma pós fixada
console.log(num1)
--num1 // Forma pré fixada
console.log(num1)

console.log(++num1 === num2--) // Na 1 execução é true, só depois é executado o decremento de num2 com o --
console.log(num1 === num2) // Já nessa execução será false



