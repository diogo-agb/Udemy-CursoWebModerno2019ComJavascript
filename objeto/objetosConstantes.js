//Pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Congela o objeto pessoa. Passou a ter um Objeto constante, nao e possival mudar nada.
pessoa.nome = 'Maria' //Nesse caso nao vai causar alteração alguma.
pessoa.end = 'Rua Abc' //Nesse caso nao vai causar alteração alguma.
delete pessoa.nome //Nesse caso nao vai causar alteração alguma.
console.log(pessoa)
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria' // A alteração é ignorada.
console.log(pessoaConstante)






