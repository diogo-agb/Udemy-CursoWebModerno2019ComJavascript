let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')    //se quiser definir valores como verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) // Array
console.log(!!{}) // Objeto "Literal"
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...') // se quiser definir valores como falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'

console.log(nome || 'Desconhecido') //Se o nome estivesse em branco '' imprimiria "Desconhecido".











