//Função factory 2

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 4000.00))
console.log(criarProduto('iPad', 2000.00))
