// Array.prototype.filterDiogo = function(callback){
//     const newArray = []
//     for(let i = 0; i < this.length; i++){
//         if(callback(this[i], i, this)){
//             newArray.push(this[i])
//         }
//     }
//     return newArray
// }

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {none: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo', preco: 12.49, fragil: true},
    {nome: 'copo', preco: 18.99, fragil: false
}]

const caro = p => p.preco > 500
const fragil = f => f.fragil

console.log(produtos.filter(function(p){
    return p.nome == 'Copo'
}))
// console.log(produtos.filter(caro).filter(fragil)) //Com .filter implementado.
