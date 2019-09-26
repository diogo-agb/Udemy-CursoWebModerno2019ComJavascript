const sequence = {
    _id: 1,
    get id(){return this._id++} //Chamando o atributo o get vai disparar a função.
}

const produtos = {}

function salvarProduto(produto)  {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto} //Torna as funções visíveis fora desse módulo
