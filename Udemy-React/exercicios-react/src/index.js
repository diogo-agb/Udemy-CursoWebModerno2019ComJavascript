import ReactDOM from 'react-dom'
import React from 'react'
import Contador from './componentes/Contador';
// import CompClasse from './componentes/CompClasse';
// import FirstComp from './componentes/FirstComp'
// import { CompA, CompB } from './componentes/DoisComponentes' //Pode renomear os componentes quando import, ex:CompB as B
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import { Membro } from './componentes/Membro'
// import CompFunc from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
import Hook from './componentes/Hook'


const element = document.getElementById('root')

ReactDOM.render(
    <div>
        <Contador numeroInicial={0} />
        <Hook />

        {/* <CompClasse /> */}

        {/* <Pai /> */}

        {/* <CompFunc /> */}

        {/* <Familia sobrenome='Pereiraaaaa' numero={123}>
            <Membro nome='Andre' />
            <Membro nome='Mariana' />
        </Familia>                                 */}

        {/* <FamiliaSilva /> */}

        {/* <MultiElementos /> */}
        {/* 
        <CompA valor="Olá eu sou A!"/>
        <CompB valor="Olá eu sou B!"/> */}

        {/* <FirstComp valor = 'Bom dia' aBcD={Math.pow(2,3)} /> */}        
    </div>
    
, element)

// const element = document.getElementById('root')
// const jsx = <h1>Hello React2</h1>
// ReactDOM.render(jsx, element)

// ReactDOM.render(
//     <ul>
//         <li>Pedro</li>
//         <li>Maria</li>
//         <li>Ana</li>
//     </ul>

// , element)