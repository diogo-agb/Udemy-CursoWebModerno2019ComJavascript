// this e exports sao duas referencias para o mesmo objeto que o module.exports aponta
console.log(module.exports == this)
console.log(module.exports === exports)

this.a = 1 // O this nesse caso é só uma referencia para o objeto que o module.exports aponta
exports.b = 2 // O exports nesse caso é só uma referencia para o objeto que o module.exports aponta

module.exports.c = 3 // Só será exportado o objeto module.exports

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {
    publico: true
}