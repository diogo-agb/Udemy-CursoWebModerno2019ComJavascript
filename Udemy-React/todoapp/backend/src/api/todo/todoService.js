const Todo = require('./todo')


// Definindo API REST padrão
Todo.methods(['get', 'post', 'put', 'delete'])

// Para que a resposta do Banco seja com o conteudo já atualizado após uma atualização.
//Quando é um update o mondo nao faz a validação dos dados, por isso runValidators = true
Todo.updateOptions({ new: true, runValidators: true }) 

module.exports = Todo
