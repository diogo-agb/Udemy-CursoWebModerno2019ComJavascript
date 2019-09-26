// Função em JS é First-Class Object (Citizens)
// Higher-order function
// Função é tratada como um dado

// Criar de forma literal: O bloco {} no caso da função é obrigatório, diferente de arrow function
function fun1(){
}

// Armazenar em uma variável:
const fun2 = function(){ // Se chamra o nome da constante passando os parenteses isso ira invocar a funcao
}

// Armazenar uma função dentro de um array:  Nao é visto constantemente
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}
run (function() {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

//OU pode chamar assim
const cincoMais = soma(2, 3)
cincoMais(4)


