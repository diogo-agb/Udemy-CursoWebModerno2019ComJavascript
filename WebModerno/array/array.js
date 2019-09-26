// Array tbm é uma estrutura indexada.

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia') // Método .push()  Adiciona o item na ultima posição do array
console.log(aprovados)
console.log(aprovados.length) // .length retorna a quantidade de posições do array, ou seja o tamanho.
aprovados[9] = 'Rafaela'
console.log(aprovados.length)

aprovados.sort() // Método .sort() Organiza por ordem alfabetica o array . Causa alteração no array, posição dos itens.
console.log(aprovados)

delete aprovados[1] // delete é usado para excluir elementos. tbm usado para excluir atributos de objs e outros
//não reorganiza o array, a posição excluida fica vazia= undefined
delete aprovados[2]
console.log(aprovados)
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 2, 'Diogo', 'Liana')// Método .splice() add e excluir elementos no array
console.log(aprovados)
aprovados.splice(3, 0,'Futebol')
console.log(aprovados)
aprovados.splice(0, 1)
console.log(aprovados)
aprovados.splice(0, 0, 'Bia')
console.log(aprovados)
console.log(aprovados.sort())





