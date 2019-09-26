const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework) //forma correta de acessar é com o get

//Uma outra forma de criar um Map ja atribuindo os elementos:
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //Função que diz se o elemento esta contido dentro desse Map.
chavesVariadas.delete(123) //Deleta o elemento
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a') //Nao aceita repetição nas chaves
chavesVariadas.set(123, 'b') //O ultimo valor será considerado, substituirá o valor a.
console.log(chavesVariadas) // Já o valor pode repetir.

