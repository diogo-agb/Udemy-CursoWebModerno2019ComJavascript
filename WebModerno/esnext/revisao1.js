//let e const novas palavras reservadas, definição de variáveis
{
    var a = 2
    let b = 3
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro.`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {idade: 9, nome: 'Ana'} 
console.log(nome, idade)




