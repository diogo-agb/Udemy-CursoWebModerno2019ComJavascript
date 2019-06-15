// Tratamento de erro com Try/Catch/Throw em Javascrip
//Evitar mostrar detalhes de infraestrutura, msg de steck, msg em outra lingua
//Ideal msg genericas, ou gerar HAsh ai vc consegue localizar no log o erro.


// function tratarErroELancar(erro){
//     // throw new Error('...')
//     //throw 10
//     //throw true
//     //throw 'mensagem'
//     // throw{
//     //     nome: erro.name,
//     //     msg: erro.message,
//     //     date: new Date
//     // }
// }

function imprimirNomeGritado(obj){
    try{  // Try é um bloco que pode conter algum prolema       
    if (console.log(obj.name.toUpperCase() + '!!!') == undefined){
        
    }
    }catch (e){ // Catch é o tratamento do problema, relançar, criar obj, lançar tipo, numero, msgm
        tratarErroELancar(e)
    }finally { //Finally é executado de qualquer forma
        console.log('Final')
    }
}

const obj = {nome: 'Diogo'}
imprimirNomeGritado(obj)

