import React from 'react'

//Multiplos elementos são elementos adjacentes

export default props => [
//Outra forma é utilizando array, nenhuma div adicional será criada
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]


//Nessa solução nenhuma div adicional será criada
    // <React.Fragment>
    //     <h1>Parte 1</h1>
    //     <h2>Parte 2</h2>
    // </React.Fragment>

// Solução 1 para exportar dois elementos adjacente, desse jeito é adicionado uma div a mais
    // <div>
    //     <h1>Parte 1</h1>
    //     <h2>Parte 2</h2>
    // </div>