function Pessoa(){
    this.idade = 0

    setInterval(function(){ //setInterval vai ficar disparando a função.
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // A notação .bind()  vai amarrar o this do objeto à chamada da função. 
}// O exemplo foi finalizado utilizando o Self, forma muito usada para apontar para o 'this' desejado, drible.

new Pessoa








