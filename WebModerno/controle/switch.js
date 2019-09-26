const imprimirResultado = function(nota){
    switch(Math.floor(nota)){  //Switch nao retorna false/true, retorna um valor. (Math.floor arredonda pra baixo)
        case 10:
        case 9:
            console.log('Quadro de honra.') // Pode multiplas sentenças dentro do mesmo case. // 
            break
        case 8: case 7: // Pode colocar os cases na mesma linha.
            console.log('Aprovado!')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação!')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida')        
    }
}

imprimirResultado(6.99)