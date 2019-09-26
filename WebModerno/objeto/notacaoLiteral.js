const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // Forma anterior da ES6.
const obj2 = {a, b, c} // Nova sintaxe mais reduzida.
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // Notação anterior
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Nova notação também suporta colchetes
console.log(obj4)

const obj5 = { //Definição de funções dentro do objeto
    funcao1: function(){ //Sintaxe anterior
        //...
    },
    funcao2(){ // Nova notação mais reduzida, adicionada no ES2015
        //...
    }
}
console.log(obj5)


