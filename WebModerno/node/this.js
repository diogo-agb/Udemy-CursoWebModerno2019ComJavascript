//Entendento o this dentro do modulo

console.log(this === global) //false
console.log(this === module) //false - This é um objeto que é exatamente a referente de module.exports 

console.log(this === module.exports) // true
console.log(this === exports) // true

//Dentro de uma função o this nao aponta para exports, mas fora da função sim
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) //false
    console.log(this === module.exports) //false    
    console.log(this === global) // true

    //this.perigo = 'qualquer coisa' // Portanto estara colocando isso dentro do escopo global, tomar cuidado
    // com esse cenário
}

// this.perigo = 'qualquer coisa' // Dessa forma o this estara retornando para o module.exports

logThis()

//Ou seja o this global estara transformando para algo que sera visivel fora do modulo
