//O mesmo exercicio só que agora usando Promise.

const http = require('http') // módulo do node, tbm tem axios que é baseado em Promise.

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//EXEMPLO ANTERIOR COM UM POUCO DE PROMISE.
// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // Array de funções que retornan Promises
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // Sempre trabalhando com Promise, colocou o then tambem colocar o catch

getTurma('D').catch(e => console.log(e.message)) // Teste, pegando turma que não existe, fazendo ele cair no reject
//ou seja no catch.

