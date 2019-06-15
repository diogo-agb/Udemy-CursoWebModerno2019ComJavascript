const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype) // Retorna undefined, porque o objeto nao tem esse atributo prototype.
console.log(ferrari.__proto__) //Forma de acesso: __proto__ da acesso ao objeto pai, o prototype.
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ ===  null) // Nao existe objeto pai para o prototype (retorna NULL)

function MeuObjeto(){
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
}
MeuObjeto()

//prototype está presente apenas dentro de funções, não de objetos. Para objetos usa-se .__proto__



