//Importando algo do escopo global do node

//Usar com cuidado em situações de excessao, o padrao e utilizar o sistema de modulos
require('./global')
console.log(global.MeuApp.saudacao())

//Nesse escopo e possivel alterar os atributos do objeto, nao deveria acontecer
MeuApp.nome = 'Eita'
console.log(global.MeuApp.nome)
//Uma alternativa para impedir alterações é o uso do freeze, o minimo que podemos fazer para tornar
//esse objeto imutavel

//Tomar cuidado ao tocar o escopo global, o sistema de modulo foi feito para
//separar as coisas de forma mais organizada
//Mas eventualmente, em alguns cenários é possivel acessar por meio do require





