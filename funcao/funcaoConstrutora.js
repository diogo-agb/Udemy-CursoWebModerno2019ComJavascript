function Carro(velocidadeMaxima = 200, delta = 5){ //Parametro padrao
    //atributo privado
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(100, 20)

while (ferrari.getVelocidadeAtual() < 100){
    ferrari.acelerar()
    console.log(ferrari.getVelocidadeAtual())
}

console.log(typeof Carro)
console.log(typeof ferrari)










