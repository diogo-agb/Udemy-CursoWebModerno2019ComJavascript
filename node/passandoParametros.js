//Passando parametros entre modulos, esse exemplo ira transformar uma lista de nomes
//em uma lista de saudações 
//para exportar parametros vc utiliza uma função
module.exports = function (...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}

