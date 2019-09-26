let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

// o this de uma função no contexto NODE o this é igual ao objeto 'global'

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // module exports pode acessar dentro de um arquivo do NODE a partir do uso do this.


// O this dentro de uma função javascript varia conforme a chamada, o this aponta para um obj global
//tanto no brownser qunato no NODE
//a função arrow aponta o this para o obj ou modulo corrente no qual essa função foi definida

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

/*Não da para mudar a referencia 'this' de uma função arrow
com o 'bind', a referencia 'this' do arrow prevalece */
comparaComThisArrow(module.exports)
