//Estrutura set, estrutura de conjunto
// não aceita repetição / não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)// 5
console.log(times.has('vasco')) //False
console.log(times.has('Vasco')) //True
times.delete('Flamengo') // Deletado
console.log(times.has('Flamengo')) // False

//Outra forma de criar um set é a partir de uma matriz

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)


