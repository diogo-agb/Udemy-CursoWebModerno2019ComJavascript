let dobro = function(a){
    return 2 * a
}

dobro = (a) => { //Função arrow sempre é anônima, para chamar precisa armazenar em alguma variavel ou constante.
    return 2 * a
}

dobro = a => 2 * a // Quando voce tem apenas um parametro tira os parenteses, e quando tira as chaves você tem
//um retorno implícito, muito usado quando vc tem apenas uma unica linha, unico trabalho, pode tirar o corpo da funcao.

console.log(dobro(Math.PI))

let ola = function (){
    return 'Ola!'
}

ola = () => 'Ola!' //Arrow function, sem parametros retorna 'Ola!'
//ola = _ => 'Ola!' //Arrow function, '_' ignora o parametro, retorna 'Ola!'
console.log(ola())



