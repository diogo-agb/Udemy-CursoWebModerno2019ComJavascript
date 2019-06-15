function teste1(num){
    if(num > 7)
        console.log(num)    // Não precisa de Chaves para apenas uma linha de código "Sentença"

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { // <- Cuidado com o ., não usar com as estruturas de controle.
        console.log(num)
    }
}

teste2(6) // Vai imprimir devido o ; no bloco IF, Isso é errado!
teste2(8)

