const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {none: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false
}]

// const caro = p => p.preco > 500
// const fragil = f => f.fragil

// console.log(produtos.filter(caro).filter(fragil))



console.log(produtos.filter(function(e){
    return e.nome == 'Copo'
}))
