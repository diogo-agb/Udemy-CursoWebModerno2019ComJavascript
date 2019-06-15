// estrategia 1 para gerar valor padrao

//Forma mais famosa - Pode gerar efeitos colaterais quando estiver somando valores com 0.
function soma1(a, b, c){
    a = 'Texto' || 'Texto'  // Se o primeiro valor for verdadeiro, ira retornar sem olhar o valor da segunda expressão;
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // Aproveitanto o mesmo console.log

// Estratégia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


//Forma ideal, mais moderna
// Usando o valor padrao do ES2015 - O Browser tem que suportar a versao do ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))


/*
 O valor padrao serve pra voce colar em parametros de funçao
 mas nao se vc tiver criado uma variavel dentro de uma funcao
 se sim a estrategia utilizada normalmente sera a de numero 1

*/










