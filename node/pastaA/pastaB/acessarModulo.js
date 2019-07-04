const moduloA = require('../../moduloA') // tbm pode usar copy path na pasta e copiar o caminho absoluto 'nao funcionou'
//no linux tem que respeitar case sensitive, letra maiuscula e minuscula
//melhor usar o path ensinado, padrao.
console.log(moduloA.ola)


//const saudacao = require('saudacao') // Pasta criada dentro da pasta node_modules, para mostrar o padrao do index
//nesse caso nao precisou informar o caminho relativo do arquivo para encontrar o código.
//console.log(saudacao.ola)

/*Alem de poder importar os modulos da sua propria  usando o caminho relativo ou absoluto
vc tbm pode importar os modulos que estão dentro do node_modules
e tbm pode importar modulos que já vem previamente instalados com
o node, que são os modulos core
*/

//Outro exemplo, agora com a pasta c dentro de B, arquivo gerado index.js
//nao foi usado o module exports nesse arquivo, apenas criado como index.js
const c = require('./pastaC') // Nesse caso basta informar a pasta, o arquivo index é procurado por padrão
console.log(c.ola2)


//exemplo com o modulo http que ja vem no node
// const http = require('http')
// http.createServer((req, res) =>{
//     res.write('Bom dia! hoje sim, hoje sim!!!')
//     res.end()

// }).listen(8080)


