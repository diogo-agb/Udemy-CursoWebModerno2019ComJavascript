//Como trabalhar em cima de uma função que retorna uma Promise usando
//o async e await, tornando o código mais síncrono...
const http = require('http')

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


//Recurso do ES8 (ECMAScript 2015)
//Objetivo de simplificar o uso de Promises.

//Simplificando o uso do Promise, tornando o código mais síncrono
//A função marcada com o async nos da a possibilidade de utilizar o await
//Sempre que estiver lidando com uma função que retorna uma Promise
//podemos utilizar o await
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}//retorna um objeto AsyncFunction, em cima desse AsyncFunction que é chamada a função then para executar.


//no código do professor obterAlunos ficou amarelo, quando coloca ; no fim da função obter alunos
// aí sim fica amarelo.
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))



