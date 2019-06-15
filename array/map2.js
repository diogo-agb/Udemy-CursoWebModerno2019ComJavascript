const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// // Retornar um array apenas com os preços:

const paraObjeto = json => JSON.parse(json) // Convertendo 'Json texto' para Objeto
const apenasPreco = attr => attr.preco // acessando o atributo do objeto
//const moeda = m => m.toFixed(2)
const resultado = carrinho.map(paraObjeto).map(apenasPreco) // percorrendo os indices retornando o obj de cada indice
// depois percorrendo os indices retornando o atributo especificado. Nessa caso temos um array de objetos.
console.log(resultado)




