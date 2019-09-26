import React from 'react'

let isLegal = true

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h1>{props.aBcD}</h1>
        <h2>{1 + 1}</h2>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>


// export default () =>
//     <div>
//         <h1>Primeiro componente (Arrow)</h1>
//     </div>

//Arrow function
// export default () => (2 + 5)



// export default function (){
//     return <h1>Primeiro componente</h1>
// }


// export default function first() {
//     return <h1>Primeiro componente</h1>
// }