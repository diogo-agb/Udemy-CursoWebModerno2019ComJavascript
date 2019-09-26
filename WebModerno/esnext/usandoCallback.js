//O objetivo dessa aula, é simular o acesso remoto a um arquivo json usando callback e 
//comprar depois como ficaria o código usando Promises.
//1 com callback, sem Promise.

const http = require('http') // módulo do node, tbm tem axios que é baseado em Promise.

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

//callbackhell, quando vc tem uma callback dentro da outra, é mais complicado de ler.
//É possível refazer esse código usando Promise, e que também será a forma ideal.
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})




