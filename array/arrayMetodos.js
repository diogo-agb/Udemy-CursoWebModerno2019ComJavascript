const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
pilotos.pop() // Método .pop() Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstapen') // Método .push() adiciona elemento na ultima posição do array.
console.log(pilotos)

pilotos.shift() // Método .shift() Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Método .unshift() adiciona elemento na primeira posição do array
console.log(pilotos)

//.splice() pode adicionar e remover elementos dentro do array

//Adicionar com .splice()
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona a partir do indice 2 e no indice 2.
console.log(pilotos)

//Remover elementos com o .splice()
pilotos.splice(3, 1) // Removendo a partir *e* do elemento indice 3, 1 elemento.
console.log(pilotos)

// Método .slice()  #### SLICE NÃO SPLICE ###
const algunsPilotos1 = pilotos.slice(2) // Método .slice gera novo array a partir e incluindo o indice 2.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Método .slice() significa pedaço, gera novo array a partir e
//incluindo o indice 1, e o que está 'entre' até o indice 4, o 4 elemento nao entra.
console.log(algunsPilotos2)
