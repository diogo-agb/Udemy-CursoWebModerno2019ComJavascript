import React from 'react'


const CompFunc = props => {

    const pessoas = ['Paula', 'Roberta', 'Gustavo', 'Julia']

    const gerarItens = itens => {
        return itens.map( item => <li>{item}</li> )
    }

    return (
        <ul>
            {gerarItens(pessoas)}
        </ul>
    )
}

export default CompFunc;