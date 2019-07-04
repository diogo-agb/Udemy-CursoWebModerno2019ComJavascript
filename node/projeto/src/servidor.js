//EXERCICIO PROJETO API COM EXPRESS

// A porta 80 é a porta padrao quando vc faz uma requisição usando http, assim como o protocolo http
//É necessário definir a porta para saber quem vai atender a requisição em determinado processo

//Essa é uma pequena API para visualizar alguns principios importantes do javascript no backend

//Express é um framework web muito popular

// tbm fo necessário instalar o (npm i --save body-parser) para interpretar de forma correta
//requisição post enviada para o servidor

//Esse é um padrão muito usado quando se trabalha com webservices tipo REST, vc trabalha com metodos http
//Nesse projeto usamos somante o banco de memória, nao foi usado bando de dados

const porta = 3003
const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//Com esse middleware qualquer requisição que seja feita ao servidor, ele vai obrigatoriamente 
//passar por esse middleware, e se no corpo da requisição tiver um padrão chamado
//urlencoded que é o padrão que selecionamos para enviar os dados, quando essa requisição
//chegar no servidor ela irá passar por esse middleware.
app.use(bodyParse.urlencoded({ extended: true }))//Esse middleware faz um parse e transforma em objeto
//para que possamos acessar da forma desejada.



// //Exemplo middleware em ação.
// app.get('/produtos', (req, res, next) => {
//     console.log('Passando por 1 Middleware ...')
//     next()
// })

// //Essa é uma outra forma de middleware. com '.use' e sem determinar o path.
// app.use((req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) //o metodo send converte o objeto para json automaticamente.
// })



app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next)  => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })    
    res.send(produto) //será enviado um JSON
})

//alterando produtos
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })    
    res.send(produto) //será enviado um JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)    
    res.send(produto) //será enviado um JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}`)
})





