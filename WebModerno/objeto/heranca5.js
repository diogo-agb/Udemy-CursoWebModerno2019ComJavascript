console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Toda função tem um atributo chamado .prototype

String.prototype.reverse = function(){ //A função .reverse nao tem por padrao na API mas voce pode reverter.
    return this.split('').reverse().join('') //O Array tem a função .reverse (reverter).
}
console.log('Escola Cod3r'.reverse()) //O metodo .reverse nao tem na API, mas como foi adicionado no prototype de string
//pode ser usado. Como o texto 'Escola Cod3r' é um objeto gerado dentro de string ele vai acessar o método .reverse

Array.prototype.first = function(){ //método .first nao existe na API, mas vc pode criar
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a','b','c',].first())

//Não faça isso, pode causar efeitos colaterais. Substituir uma função que já existe, é possível sobrescrever
String.prototype.toString = function(){
    return 'Lascou tudo.'
}
console.log('Escola Cod3e'.reverse())











// Meu teste
//console.log('Diogo'.split('').reverse().join('')) //Funções de String
