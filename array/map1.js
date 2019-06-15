// .map serve para fazer uma transformação no array

const nums = [1, 2, 3, 4, 5]

//.map é um For com propósito

let resultado = nums.map(function(e){ // map gera um novo array, nao modifica o array atual.
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => e.toFixed(2).replace('.', ',' )

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)




