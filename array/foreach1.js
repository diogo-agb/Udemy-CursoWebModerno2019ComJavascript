const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Método .ForEach() retorna 3 parametros
aprovados.forEach(function(nome, indice){ //Para exibir o 2º parametro de retorno, o indice, obrigatoriamente precisa definir o 1º parametro.
    console.log(`${indice + 1}) ${nome}`)
})


//Com arrow function
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


