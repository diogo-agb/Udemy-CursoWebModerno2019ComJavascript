const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desc: 0.15
}

//Escrevendo um arquivo json, + convertendo um obj para json

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo')
})


