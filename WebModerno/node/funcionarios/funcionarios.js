const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // O axios é um client http, ele faz requisições para obter
//informações de algo que está remoto.
//nesse exercicio acessamos um jsom remoto, que poderia ser um webservice

const genero  = f => f.genero === 'F'
const local = f => f.pais === 'China'
const menorSalario = (a, b) =>{
    return a.salario < b.salario ? a : b
}

axios.get(url).then(response => {  //codigo que ira importar os funcionarios do diretorio remoto
    const funcionarios = response.data
//    console.log(funcionarios.filter(genero).filter(local)
    const func = funcionarios
        .filter(genero)
        .filter(local)
        .reduce(menorSalario)
    console.log(func)
})

//Exercicio, procurar mulher chinesa com o menor salario.









