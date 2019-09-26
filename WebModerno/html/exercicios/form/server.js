const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('Formulário recebido.<br><br><a href="http://localhost:8080/index.html">Página inical</a><br>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Usuário alterado com sucesso!<br><br><a href="http://localhost:8080/index.html">Página inical</a><br>')
})
app.listen(3003)