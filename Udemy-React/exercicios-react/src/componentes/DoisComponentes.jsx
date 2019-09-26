import React from 'react'

const CompA = props =>
    <h1>Primeiro diz: {props.valor}</h1>

const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>

//Também pode exportar duas formas juntas, assim no arquivo index.js podera importar com as {} ou sem. E 
// também poderá personalizar o nome sem precisar colocar o (as)
// export const CompA = props =>
//     <h1>Primeiro diz: {props.valor}</h1>

// export default CompA

// Se utilizar somente o export sem o default, não é possivel exportar uma função anonima
// export function(){
//     return <p>Teste 1</p>
// }

// //Pode retornar algo anonimo se utilizar o default
// export default function(){
//     return <p>Teste 2</p>
// }

export { CompA, CompB }