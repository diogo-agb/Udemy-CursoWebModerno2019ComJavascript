
//Criando nosso próprio método .map. Vendo como o map funciona por dentro.
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// // Retornar um array apenas com os preços:

const paraObjeto = json => JSON.parse(json) // Convertendo 'Json texto' para Objeto
const apenasPreco = attr => attr.preco // acessando o atributo do objeto
const resultado = carrinho.map(paraObjeto).map2(apenasPreco) // percorrendo os indices retornando o obj de cada indice
// depois percorrendo os indices retornando o atributo especificado. Nessa caso temos um array de objetos.
console.log(resultado)