//Uma função factory, é uma função que retorna um objeto. Quando
//vc precisa criar varios objetos "iguais".

//Factory simples

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())
