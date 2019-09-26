import React from 'react'
import Filho from './Filho'

const pai = props => {

    const notificarSaida = lugar => {
        lugar = lugar || 'Não vai sair'
        return alert(lugar)
    }

    return (       
        <Filho notificarSaida={notificarSaida} />        
    )
}

export default pai;