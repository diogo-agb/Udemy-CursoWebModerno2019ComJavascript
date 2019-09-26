const alunos = [
    {nome: 'Jenifer', nota: 5},
    {nome: 'Fernanda', nota: 9}
]

//Imperativo
let total1 = 0
for(let i in alunos){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo. Declarativo é melhor pois possibilita o reaproveitamento do código

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//Exemplo de código declarativo: Comando SQL
//select codigo, nome, email from clientes where ativo = 1
//Nesse exemplo não há preocupação de como o código vai fazer para retornar o que foi solicitado.