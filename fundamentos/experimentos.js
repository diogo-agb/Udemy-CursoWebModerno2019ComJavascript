// Essa aula é mais de node do que javascript
//Fazer curso/conhecer sistema de modulo do Node
//Para programar javascript no backend
//Conhecer o runtime Node ou Navegador

//Dica, sempre que possível fugir do escopo global
//Se precisar tocar o escopo global, fazer isso por meio de 
//Objetos dentro de objetos
let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//Criando uma variavel maluca sem var e let
abc = 1 // Nao faça isso em casa
console.log(global.abc)
//module.exports = {e: 456, f: false, g: 'teste'}







