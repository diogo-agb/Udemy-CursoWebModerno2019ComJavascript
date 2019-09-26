const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`) //Template string.
}

fabricantes.forEach(imprimir) // O callback ocorre quanto o forEach encontra um novo elemento no array, ai chama
//novamente a função. Ou seja, quando a resposta do forEach chega!!! isso é o callback.

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante)) // Arrow function


