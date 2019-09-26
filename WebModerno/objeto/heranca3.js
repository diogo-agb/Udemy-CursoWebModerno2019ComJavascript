const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // Cria o novo objeto ja apontando o prototype , o objeto pai.
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // Alteração ignorada devido ser propriedade definida para o aributo com Object.create
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //Object.Keys percorre e mostra os atributos do objeto.
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ? //Forma para saber se o atrib pertence ao proprio objeto ou veio por herança.
        console.log(key) : console.log(`Por herança: ${key}`)
}
