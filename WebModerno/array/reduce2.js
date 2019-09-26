const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

//Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (a, b) => a && b
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Desafio 2: algum aluno é bolsista?

const algumBolsista = (a, b) => a || b
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))