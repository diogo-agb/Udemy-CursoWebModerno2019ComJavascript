//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Nao é recomendado atribuir para o Object.prototype pode impactar em toda a estrutura
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
//console.log(filho.attr0) // Se chamar atributo inexistente na cadeia retorna undefined.
//Se não achar no topo da cadeia procura em Object.prototype
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // O atributo 3 attr3 retornara o valor do 1 attr encontrado.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h.`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing, sobrescreve o atributo herdado de carro
}

const volvo = {
    modelo: 'V40',
    status(){ // Shadowing, adicionando algo a mais.
        return `${this.modelo}: ${super.status()}` // O super vai chamar o método do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) // Método que estabelece relação de herança (protótipo) entre ferrari e carro (dois objetos).
Object.setPrototypeOf(volvo, carro)

console.log(volvo)
volvo.acelerarMais(330) // Volvo chamou metodo que esta no prototipo
console.log(volvo.status())
console.log(ferrari)
ferrari.acelerarMais(300)
console.log(ferrari.status())





