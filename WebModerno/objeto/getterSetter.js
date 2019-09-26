
//Uma forma de encapsulamento, utlizando a convencao (_na frente da variavel), usando get/set para acessar a variavel.
const sequencia = {
    _valor: 1, // Convenção, essa é uma variavel pretendida a ser acessada apenas internamente.
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)




