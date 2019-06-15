const notas = [10, 6.5]

media(notas)

// function calcularMedia(a){
//     let soma = 0
//     for(let i in a){
//         soma += a[i]
//     }
//     return console.log(soma / a.length)
// }

// calcularMedia(notas)


function media (x){
    let resultadoSomaArray = 0
    const somarArray = e => resultadoSomaArray += e
    notas.map(somarArray)
    return console.log(resultadoSomaArray / x.length)
}





