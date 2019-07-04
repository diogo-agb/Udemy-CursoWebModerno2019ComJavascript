//Exemplo de import de modulo interno do node, nao precisa usar caminho relativo nesse caso
//modulo 'http'

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia! Diogo. Mae. Cris. Diego')
    res.end()
}).listen(8080)
