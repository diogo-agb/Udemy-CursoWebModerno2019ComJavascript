const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

valores[10] = 10
console.log(valores)

console.log(valores.length) // Largura do array
valores.push({id: 3}, false, null, 'teste') // Adiciona itens no array, itens diferentes.

console.log(valores)

console.log(valores.pop()) // Retira o ultimo item do array.

console.log(valores)
delete valores[0] // Apaga o item especificado do array

console.log(valores)
console.log(typeof valores) // Array in JavaScript is a object. Mostra o tipo.


