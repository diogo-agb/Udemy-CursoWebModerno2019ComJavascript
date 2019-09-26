const escola = [{
    nome: 'Turma1',
    alunos: [{
        nome: 'Debora',
        nota: 8
    },{
        nome: 'Natalia',
        nota: 9
    }]
}, {
    nome: 'Turma2',
    alunos: [{
        nome: 'Alana',
        nota: 10
    },{
        nome: 'Fabiana',
        nota: 9
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

console.log([].concat([ 8, 9 ], [ 10, 9 ]))

//Com flatMap. método flatMap não existe na API, foi criada.

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))}

const notas2  = escola.flatMap(getNotasTurma)
console.log(notas2)
