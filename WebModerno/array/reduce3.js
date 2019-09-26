//Implementando a nossa própria versão do .reduce(), versão simplificada
Array.prototype.reduce2 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0:1
        let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

//Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (a, b) => a && b
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas))


//Desafio 2: algum aluno é bolsista?

const algumBolsista = (a, b) => a || b
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))