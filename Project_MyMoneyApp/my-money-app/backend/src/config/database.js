const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney',
    { useNewUrlParser: true, useUnifiedTopology: true }
)

//Atribuindo mensagem de erro personalizada ao retorno do mongoose
//Reconheceu o PATH digitado dessa forma
//Outra forma é definir diretamente no schema do banco, verificar sintaxe.
//Essa forma me pareceu mais genérica.
//Se definida a msg do Schema tem prioridade devido ser mais específica.
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."