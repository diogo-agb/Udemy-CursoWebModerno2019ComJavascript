//IIFE: Immediately Invoked Function Expression
//Uma função auto-invocada, ajuda a fugir do escopo global no brownser.

//var, const, let, estará disponível apenas dentro dessa função. A ideia é fugir do escopo global.
//mas no brownser poderá invocar o escopo global com ex: 'window.a'

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente.')
})()



