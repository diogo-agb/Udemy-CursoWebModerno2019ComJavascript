const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const media = a => a / alunos.length
const resultado = alunos.map(a => a.nota).reduce((a, b) => a + b)
console.log(media(resultado))



