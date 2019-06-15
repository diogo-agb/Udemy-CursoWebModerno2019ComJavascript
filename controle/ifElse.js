const imprimirResultado = function (nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!!')
    }
}

imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado('Epa!') // Evitar Cuidado, string onde deveria ser number

