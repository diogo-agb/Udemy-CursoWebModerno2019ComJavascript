//Implementando nosso próprio forEach, forEach2.

Array.prototype.forEach2 = function(callback){ //Criando uma função no prototype de Array para criar nosso próprio forEach.
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})






