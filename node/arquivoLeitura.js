//Lendo arquivos .json com o file system do node. fs é um módulo core do node

const fs = require('fs')
const caminho = __dirname + '/arquivo.json'


//modo sincrono... quando à dependencia de retorno / espera
const conteudo = fs.readFileSync(caminho, 'utf-8')  // precisa informar o encoding para ler da forma correta
console.log(conteudo)


//modo assincrono, modo de leitura mais interessante.
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)

    console.log(`${config.db.host}: ${config.db.port}`)
})

//Para o formato json essa é a forma mais simples de ler o arquivo.
const config = require('./arquivo.json')
console.log(config.db)

//Leitura de uma pasta. __dirname é uma constante que está presente em todos os arquivos e módulos 
//do node que representa o diretório atual.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta:')
    console.log(arquivos)
})








