import React from 'react'

const Membro = props =>
    <div>
        {props.nome}
        <strong> { props.sobrenome } </strong>
        {props.numero}
    </div>

export { Membro }

// export default props =>
//     <div>
//         {props.nome}
//         <strong> { props.sobrenome } </strong>
//     </div>