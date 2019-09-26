//console.log(global)
//Disponibilizando algo no escopo global do node

global.MeuApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares.'
    },
    nome: 'Sistema legal!'
})